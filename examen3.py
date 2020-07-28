import numpy as np
import pandas as pd
from scipy import ndimage
from scipy import misc

In [2]:

#2) Crear un vector de ceros de tamaño 10
np.zeros(10)

Out[2]:

array([0., 0., 0., 0., 0., 0., 0., 0., 0., 0.])

In [3]:

#3) Crear un vector de ceros de tamaño 10 y el de la posicion 5 sea igual a 1
a = np.zeros(10)
a[5] = 1
a

Out[3]:

array([0., 0., 0., 0., 0., 1., 0., 0., 0., 0.])

In [4]:

#4) Cambiar el orden de un vector de 50 elementos, el de la posicion 1 es el de la 50 etc.
b = np.arange(50)
b = b[::-1]
b

Out[4]:

array([49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33,
       32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16,
       15, 14, 13, 12, 11, 10,  9,  8,  7,  6,  5,  4,  3,  2,  1,  0])

In [5]:

#5) Crear una matriz de 3 x 3 con valores del cero al 8
np.arange(0,9).reshape(3,3)

Out[5]:

array([[0, 1, 2],
       [3, 4, 5],
       [6, 7, 8]])

In [7]:

#6) Encontrar los indices que no sean cero en un arreglo
arreglo = [1,2,0,0,4,0]
np.nonzero(arreglo)

Out[7]:

(array([0, 1, 4], dtype=int64),)

In [8]:

#7) Crear una matriz de identidad 3 x 3
np.eye(3)

Out[8]:

array([[1., 0., 0.],
       [0., 1., 0.],
       [0., 0., 1.]])

In [25]:

#8) Crear una matriz 3 x 3 x 3 con valores randomicos
arr = np.array(np.random.randint(0,50,27))
arr.reshape(3,3,3)

Out[25]:

array([[[30,  3, 21],
        [20, 23, 32],
        [27, 27, 27]],

       [[15, 10, 35],
        [35, 40, 40],
        [36, 32,  6]],

       [[ 9, 29, 19],
        [ 2, 48, 29],
        [18, 37, 18]]])

In [29]:

#9) Crear una matriz 10 x 10 y encontrar el mayor y el menor
mat = np.arange(100).reshape(10,10)
print(f"max= {mat.max()}")
print(f"min= {mat.min()}")

max= 99
min= 0

In [ ]:

#10) Sacar los colores RGB unicos en una imagen (cuales rgb existen ej: 0, 0, 0 - 255,255,255 -> 2 colores)

In [ ]:

#11) ¿Como crear una serie de una lista, diccionario o arreglo?
mylist = list('abcedfghijklmnopqrstuvwxyz')
myarr = np.arange(26)
mydict = dict(zip(mylist, myarr))

serie_A = pd.Series(mylist)
serie_B = pd.Series(myarr)
serie_C = pd.Series(mydict)

In [58]:

#12) ¿Como convertir el indice de una serie en una columna de un DataFrame?
mylist = list('abcedfghijklmnopqrstuvwxyz')
myarr = np.arange(26)
mydict = dict(zip(mylist, myarr))
ser = pd.Series(mydict)

indices=list(ser.index.values)
ser_df = pd.DataFrame(ser)
ser_df[1] = indices
ser_df
# Transformar la serie en dataframe y hacer una columna indice

Out[58]:
	0 	1
a 	0 	a
b 	1 	b
c 	2 	c
e 	3 	e
d 	4 	d
f 	5 	f
g 	6 	g
h 	7 	h
i 	8 	i
j 	9 	j
k 	10 	k
l 	11 	l
m 	12 	m
n 	13 	n
o 	14 	o
p 	15 	p
q 	16 	q
r 	17 	r
s 	18 	s
t 	19 	t
u 	20 	u
v 	21 	v
w 	22 	w
x 	23 	x
y 	24 	y
z 	25 	z
In [53]:

#13) ¿Como combinar varias series para hacer un DataFrame?
ser1 = pd.Series(list('abcedfghijklmnopqrstuvwxyz'))
ser2 = pd.Series(np.arange(26))
ser3 = pd.concat([ser1,ser2])
dataframe = pd.DataFrame(ser3)
dataframe

Out[53]:
	0
0 	a
1 	b
2 	c
3 	e
4 	d
5 	f
6 	g
7 	h
8 	i
9 	j
10 	k
11 	l
12 	m
13 	n
14 	o
15 	p
16 	q
17 	r
18 	s
19 	t
20 	u
21 	v
22 	w
23 	x
24 	y
25 	z
0 	0
1 	1
2 	2
3 	3
4 	4
5 	5
6 	6
7 	7
8 	8
9 	9
10 	10
11 	11
12 	12
13 	13
14 	14
15 	15
16 	16
17 	17
18 	18
19 	19
20 	20
21 	21
22 	22
23 	23
24 	24
25 	25
In [56]:

#14) ¿Como obtener los items que esten en una serie A y no en una serie B?
ser1 = pd.Series([1, 2, 3, 4, 5])
ser2 = pd.Series([4, 5, 6, 7, 8])

resp = ser1.isin(ser2)
for i in range(len(resp)):
  resp[i] = not resp[i]

ser1[resp]

Out[56]:

0    1
1    2
2    3
dtype: int64

In [59]:

#15) ¿Como obtener los items que no son comunes en una serie A y serie B?
ser1 = pd.Series([1, 2, 3, 4, 5])
ser2 = pd.Series([4, 5, 6, 7, 8])

resp = ser1.isin(ser2)
resp2 = ser2.isin(ser1)

for i in range(len(resp)):
  resp[i] = not resp[i]

for i in range(len(resp2)):
  resp2[i] = not resp2[i]

serie = ser1[resp]
serie2 = ser2[resp2]
serie3 = pd.concat([serie,serie2])
serie3

Out[59]:

0    1
1    2
2    3
2    6
3    7
4    8
dtype: int64

In [60]:

#16) ¿Como obtener el numero de veces que se repite un valor en una serie?
#ser = pd.Series(np.take(list('abcdefgh'), np.random.randint(8, size=30)))

In [ ]:

#17) ¿Como mantener los 2 valores mas repetidos de una serie, y a los demas valores cambiarles por 0 ?
#np.random.RandomState(100)
#ser = pd.Series(np.random.randint(1, 5, [12]))

In [ ]:

#18) ¿Como transformar una serie de un arreglo de numpy a un DataFrame con un shape definido?
#ser = pd.Series(np.random.randint(1, 10, 35))
#shape(7,5)

In [61]:

#19) ¿Obtener los valores de una serie conociendo la posicion por indice?
ser = pd.Series(list('abcdefghijklmnopqrstuvwxyz'))
pos = [0, 4, 8, 14, 20]
# a e i o u
ser[pos]

Out[61]:

0     a
4     e
8     i
14    o
20    u
dtype: object

In [38]:

#20) ¿Como anadir series vertical u horizontalmente a un DataFrame?
arr_pand = np.arange(5,10)
ser1 = pd.Series(range(5))
ser2 = pd.Series(list('abcde'))

df = pd.DataFrame(arr_pand)

#añadir verticalmente
df[1] = ser1

#añadir horizontalmente
df = df.append(ser2, ignore_index = True)
df

Out[38]:
	0 	1 	2 	3 	4
0 	5 	0 	NaN 	NaN 	NaN
1 	6 	1 	NaN 	NaN 	NaN
2 	7 	2 	NaN 	NaN 	NaN
3 	8 	3 	NaN 	NaN 	NaN
4 	9 	4 	NaN 	NaN 	NaN
5 	a 	b 	c 	d 	e
In [40]:

#22)¿Como importar solo columnas especificas de un archivo csv?
path = 'C://Users//MORALES//Documents//GitHub//py-morales-banda-juan-jose//Examen//I Bimestre//BostonHousing.csv'
columnas = ['crim','zn','nox','rm']
df2 = pd.read_csv(path, usecols = columnas)
df2

Out[40]:
	crim 	zn 	nox 	rm
0 	0.00632 	18.0 	0.538 	6.575
1 	0.02731 	0.0 	0.469 	6.421
2 	0.02729 	0.0 	0.469 	7.185
3 	0.03237 	0.0 	0.458 	6.998
4 	0.06905 	0.0 	0.458 	7.147
5 	0.02985 	0.0 	0.458 	6.430
6 	0.08829 	12.5 	0.524 	6.012
7 	0.14455 	12.5 	0.524 	6.172
8 	0.21124 	12.5 	0.524 	5.631
9 	0.17004 	12.5 	0.524 	6.004
10 	0.22489 	12.5 	0.524 	6.377
11 	0.11747 	12.5 	0.524 	6.009
12 	0.09378 	12.5 	0.524 	5.889
13 	0.62976 	0.0 	0.538 	5.949
14 	0.63796 	0.0 	0.538 	6.096
15 	0.62739 	0.0 	0.538 	5.834
16 	1.05393 	0.0 	0.538 	5.935
17 	0.78420 	0.0 	0.538 	5.990
18 	0.80271 	0.0 	0.538 	5.456
19 	0.72580 	0.0 	0.538 	5.727
20 	1.25179 	0.0 	0.538 	5.570
21 	0.85204 	0.0 	0.538 	5.965
22 	1.23247 	0.0 	0.538 	6.142
23 	0.98843 	0.0 	0.538 	5.813
24 	0.75026 	0.0 	0.538 	5.924
25 	0.84054 	0.0 	0.538 	5.599
26 	0.67191 	0.0 	0.538 	5.813
27 	0.95577 	0.0 	0.538 	6.047
28 	0.77299 	0.0 	0.538 	6.495
29 	1.00245 	0.0 	0.538 	6.674
... 	... 	... 	... 	...
476 	4.87141 	0.0 	0.614 	6.484
477 	15.02340 	0.0 	0.614 	5.304
478 	10.23300 	0.0 	0.614 	6.185
479 	14.33370 	0.0 	0.614 	6.229
480 	5.82401 	0.0 	0.532 	6.242
481 	5.70818 	0.0 	0.532 	6.750
482 	5.73116 	0.0 	0.532 	7.061
483 	2.81838 	0.0 	0.532 	5.762
484 	2.37857 	0.0 	0.583 	5.871
485 	3.67367 	0.0 	0.583 	6.312
486 	5.69175 	0.0 	0.583 	6.114
487 	4.83567 	0.0 	0.583 	5.905
488 	0.15086 	0.0 	0.609 	5.454
489 	0.18337 	0.0 	0.609 	5.414
490 	0.20746 	0.0 	0.609 	5.093
491 	0.10574 	0.0 	0.609 	5.983
492 	0.11132 	0.0 	0.609 	5.983
493 	0.17331 	0.0 	0.585 	5.707
494 	0.27957 	0.0 	0.585 	5.926
495 	0.17899 	0.0 	0.585 	5.670
496 	0.28960 	0.0 	0.585 	5.390
497 	0.26838 	0.0 	0.585 	5.794
498 	0.23912 	0.0 	0.585 	6.019
499 	0.17783 	0.0 	0.585 	5.569
500 	0.22438 	0.0 	0.585 	6.027
501 	0.06263 	0.0 	0.573 	6.593
502 	0.04527 	0.0 	0.573 	6.120
503 	0.06076 	0.0 	0.573 	6.976
504 	0.10959 	0.0 	0.573 	6.794
505 	0.04741 	0.0 	0.573 	6.030

506 rows × 4 columns

