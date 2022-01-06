---
title: Implementing K-Nearest Neighbors From Scratch In Python
author: Will Forman
date: 2021-12-26T18:34:28+0000
image: ./classification_model.png
---

Imagine you had a group of dogs and cats. You weighed each animal and noted the color of their fur, and put all the data in a table. Would you be able to create a model, that given these parameters, could decide if the row was a dog or a cat?

The answer is yes, as this is one of the biggest applications of data science today. This type of model is a **classification model**. The goal of classification models are to assign some input data into different categories, using statistics to make the decisions.

There is a [famous dataset from the University of Wisconsin](<https://archive.ics.uci.edu/ml/datasets/Breast+Cancer+Wisconsin+(Diagnostic)>) that took mass from patients with and without breast cancer, and noted 32 features. We are going to create our own classification model that will be able to predict which patients did and did not have breast cancer. We will be implementing two common models for classification: K-Nearest Neighbors, and Linear Regression.

## K-Nearest Neighbors

### How It Works

#### Intuition

The K-Nearest Neighbors model is an simple and intuitive model to classify a point. The idea behind it is that similar categories are close together in proximity. We can visualize this with a graph where we know some data points already and which class they belong to:

![Distribution of two classes](./classification_model.png)

As you can see, points above the model belong to Class 1, and below to Class 2. Of course, in a real data science problem, we won't have this ideal model, so we have to guess some other way.

Given a point $p$ at $(a,b)$, we can do the following:

- Calculate the distance from every labeled point to $(a,b)$
- Take the $k$ points with the smallest distance
- $p$ belongs to the majority class of these points

We can visualize this by drawing a very small circle around the point, and expanding it until it surrounds $k$ other points. The following shows that example when $k=3$ and $p$ is at $(50, 50)$:

![K-Nearest Neighbors Visualization](./knn_model.png)

Therefore, in this example, $p$ would belong to Class 1. This is easy to do on a graph, but we need a way to calculate the distance between two points. How will we do it?

#### Calculating Distance

There are 4 commonly used distance metrics in Machine Learning:

- Euclidean Distance
- Manhattan Distance
- Minkowski Distance
- Hamming Distance

We will use the **Euclidean Distance** formula, as it's the simplest. It uses the Pythagorean Theorem to find the distance between a point at $(x_1, y_1)$ and a point at $(x_2, y_2)$:

$d=\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$

Expanding this to allow for $n$ dimensions is important, because our dataset has 32 features, therefore 32 dimensions. To calculate the distance between two points $x$ and $y$ of $n$ dimensions is:

$d = \sqrt{\sum_{i=1}^{n} (x_i - y_i)^2}$

#### Choosing K

Lastly, we must choose our own $k$ for our model. Remember that $k$ is the number of neighbors we will compare to the point we are trying to classify.

Choosing a low $k$ leads to overfitting, or that noise will have a larger influence on the model. Likewise, choosing a high $k$ leads to underfitting. Therefore, it is critical to get it right

A general rule of thumb for $n$ datapoints is to use $k = \sqrt{n}$. It is also preferred to use an odd number, in the case of tie. For example, if $k = 4$, a possible scenario is that there are two neigbors of Class 1, and two neighbors of Class 2.

### Implementation

#### Prerequisites

For this tutorial, you will need a Python 3 installation. I will be using 3.9.9 for this tutorial.

You will also need the following packages installed:

- Sci-Kit Learn
- Numpy
- Pandas

#### Using Sci-Kit Learn

We will quickly go over how to implement this with sci-kit learn, because this is a really easy way to create a classifier.

##### Preparing the data

First, we are going to load the dataset from Sci-Kit Learn, then seperate it into our x and y variables.

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
```

`random_state=0`: pass a seed of 0 to the function so the data will be split the same way every time we run it with this argument

`stratify=y`: preserve the proportion of targets from the original dataset to the test/train datasets

Lastly, we will also calculate the number of data points we have in the dataset to calculate k.

```python
from math import sqrt, floor

n = x.shape[0] # 569
k = floor(sqrt(n)) # 23
```

##### Training the Model

Now, we will pass the training data into the model to train it.

```python
from sklearn.neighbors import KNeighborsClassifier

knn = KNeighborsClassifier(n_neighbors=k)
knn.fit(x_train, y_train)
```

##### Testing the Model

Finally, we can use the model to predict for the test data.

```
y_test_pred = knn.predict(x_test)
```

We can calculate the score for this

```python
score = knn.score(x_test, y_test)
print(f'Custom KNN without normalization {score}')
```
