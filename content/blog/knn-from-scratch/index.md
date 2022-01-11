---
title: Implementing K-Nearest Neighbors From Scratch on Breast Cancer Dataset In Python
author: Will Forman
date: 2021-12-26T18:34:28+0000
image: ./classification_model.png
---

Imagine you had a pile of apples and oranges. You recorded the weight and color of each, and put the data in a table. Would you be able to create a model that can differentiate the two types of fruits?

The answer is yes, as this is one of the biggest applications of data science today. This type of model is a **classification model**. The goal of classification models are to predict a category based on input data. It does so using statistics to make the decisions.

Accurately classifying datasets could be especially useful on applications focused on health care / biology. We are going to implement a type of classification model called **K-Nearest Neighbors** on a breast cancer dataset.

### How it Works

K-Nearest Neighbors is a **supervised** classification model. This means that it requires some input data that is already labeled with the correct classes. To train this model, we simply pass it the labeled data (called the *training data*).

This data will be used by the model to predict classes following the idea that similar objects stick together. If we have a datapoint $d$ that we'd like to predict, here's what our KNN model will do:

1. Find the $k$ *training* datapoints closest to $d$
2. Find the class with the most representation of these $k$ points

This class with the most representation is the prediction for $d$.

One other note is that we can choose $k$ however we want. As a good rule of thumb, if you have $n$ datapoints, then choose $k = \sqrt{n}$.

### Visualization

We train a KNN model by giving it 100 datapoints, each as a point $(x,y)$. The classes are chosen as following:

- Class A: $y \geq x$
- Class B: $y < x$

![Graph of the two classes](./classification_model.png)

Now, let's try predicting the class of a new point $p$. We will visually do this by drawing a circle at $p$, then expanding it until there are $k$ points inside the circle. We will choose $k = 3$ for simplicity. 

Here's what the prediction for $p = (45, 47)$:

![Prediction for p](./knn_model.png)

In this example, we would predict $p$ to have be of Class A. This is because two of the points in the circle belong to Class A. 

We'll check this by checking that $p_{y} \geq p_{x}$. We see that this in fact true, meaning that the prediction will be correct in this case.

### Dataset We're Using

There is a [famous dataset from the University of Wisconsin](<https://archive.ics.uci.edu/ml/datasets/Breast+Cancer+Wisconsin+(Diagnostic)>) that took mass from patients with and without breast cancer. It is commonly used for learning purposes due to it's simplicity, therefore being easy to train an accurate model on.

Our goal is to predict if the patient has breast cancer. We will do so using the 32 different features. You can take a look at the first 4 datapoints below:

### Implementation

This tutorial was completed with Python 3.9.9, but most likely any Python3 version will work. It also requires the following packages:

- Sci-Kit Learn
- Numpy
- Pandas

#### Creating our Model

As we said before, the two steps for a KNN Model are: 

1. Find $k$ neighbors
2. Find majority class of neighbors

Step 2 is pretty straightforward. Just count up all occurrences of each class, then return the one with the most occurrences. We will use the builtin `Counter` to do this for us.

```python
from collections import Counter
def get_pred(neighbor_labels):
    counter = Counter(neighbor_labels)
    pred = counter.most_common(1)[0][0]
    return pred
```

Step 1 is more challenging. It was easy enough do this visually with the circle method. How do we do it programmatically though?

We can calculate the distance between two points using the **Euclidean Distance** formula. It uses the Pythagorean Theorem to find the distance between a point at $(x_1, y_1)$ and a point at $(x_2, y_2)$:

$d=\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$

Notice that this works on points with only an x and y, meaning two dimensions. Our dataset has 32 dimensions, so we need to expand the formula for $n$ dimensions:

$d = \sqrt{\sum_{i=1}^{n} (x_i - y_i)^2}$

We will need this for our model, so let's make a function for it.

```python
def euclidean_dist(point1, point2):
    sum = 0
    for feature1, feature2 in zip(point1, point2):
        squared_difference = (feature2 - feature1) ** 2
        sum += squared_difference

    return sqrt(sum)
```

We now need to calculate the distance from every train point to the test point.

```python
def calc_dists(x_train, test_point):
    dists = []
    for train_point in x_train:
        dist = euclidean_dist(train_point, test_point)
        dists.append(dist)
    
    return dists
```

Next, we'll need to use these distances to get the $k$ neighbors.

```python
def get_neighbor_labels(dists, y_train, n_neighbors):
    dists_df = pd.DataFrame(data=dists, columns=['dist'])
    dists_df_sorted = dists_df.sort_values(by=['dist'], axis=0)

    neighbors_indices = dists_df_sorted[:n_neighbors].index.values
    neighbors_labels = [y_train[neighbor_index]
                        for neighbor_index in neighbors_indices]
    return neighbors_labels
```

Now we have all the functions to return the predictions for a set of test points. We'll just need a function to calculate our accuracy.

```python
def get_score(y_test, y_pred):
    correct_predictions = 0
    for class_test, class_pred in zip(y_test, y_pred):
        if class_test == class_pred:
            correct_predictions += 1
    return correct_predictions / len(y_test)
```

#### Preparing the Data

The first thing we will need to do is get the data. Instead of downloading our own csv data file, we can simply use Sci-Kit Learn to load it.

```python
from sklearn.datasets import load_breast_cancer

breast_cancer = load_breast_cancer()
x = breast_cancer.data
y = breast_cancer.target
```

Next, we are going to split the data into our test train split.

```python
from sklearn.model_selection import train_test_split

x_train, x_test, y_train, y_test = train_test_split(x, y, random_state=0, stratify=y)

# random_state = 0: set seed to 0, meaning
# that data will be split into test/train
# the same way each time we run the program
#
# stratify = y: preserve the proportion of 
# targets from the original dataset to the
# test/train sets
```

Lastly, we will also calculate the number of data points we have in the dataset to calculate k.

```python
from math import sqrt, floor

n = x.shape[0] # 569
k = floor(sqrt(n)) # 23
```

#### Implementing the Model

Now, all we have to do is use the functions we wrote above to get the prediction for each point. Once have each prediction, we can score how accurate our model is.

```python
y_pred = []
for test_point in x_test:
    dists = calc_dists(x_train, test_point)
    neighbor_labels = get_neighbor_labels(dists, y_train, k)
    pred = get_pred(neighbor_labels)
    y_pred.append(pred)

score = get_score(y_test, y_pred)
score
```

After all that work, we finally can see how accurate our model is. It scored **92.3%**! Not bad for about 25 lines of code. However, we can do better using **normalization**.

#### Normalization

Notice how in our dataset, some measurements are in the decimals and others are in the thousands. When a point in the decimals is off by .5, it's a big difference relatively to a number in the decimals. Meanwhile, a point in the thousands, but it'll only be off by 10, so it's not that big of a difference relatively. The problem is, the weightings don't treat it that way.

Data with a larger magnitude is weighted much heavier in our calculations, unless if we normalization. Normalization reduces this unfair weighting, and will consequently make our model more accurate. This is the formula for normalization:

$x_{norm} = \frac{x - \mu} {\phi}$

where $\mu$ is the mean and $\phi$ is the standard deviation.

We calculate the normalized values for x.

```python
x_mean = x.mean(axis=0)
x_std = x.std(axis=0)

x_train_norm = (x_train - x_mean) / x_std
x_test_norm = (x_test - x_mean) / x_std
```

Then, we'll calculate the score exactly the same as above, this time using the normalized values.

```python
y_pred = []
for test_point in x_test_norm:
    dists = calc_dists(x_train_norm, test_point)
    neighbor_labels = get_neighbor_labels(dists, y_train, k)
    pred = get_pred(neighbor_labels)
    y_pred.append(pred)

score = get_score(y_test, y_pred)
score
```

This time the score is **95.1%**! 

### Conclusion

In then end, we were able to create a very acurate model for determining if a patient has breast cancer or not. We did so creating a K-Nearest Neighbors from scratch. We also used normalization to make our model even more accurate.

Sci-Kit Learn has a very similar implementation of K-Nearest Neighbors that you can use on your own to do this much quicker.

The main takeaway is that even a simple model can work on a dataset with a lot of features, and that you can do it yourself. You can use this on whatever dataset you want, and see if it's a good fit.
