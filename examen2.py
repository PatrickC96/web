#2) Crear un vector de ceros de tamaño 10


import numpy as np
vector_zeros = np.zeros(10)
print(vector_zeros)

#[0. 0. 0. 0. 0. 0. 0. 0. 0. 0.]

#3) Crear un vector de ceros de tamaño 10 y el de la posicion 5 sea igual a 1


vector_zeros_un_uno = np.zeros(10)
vector_zeros_un_uno[4]=1
print(vector_zeros_un_uno)

#[0. 0. 0. 0. 1. 0. 0. 0. 0. 0.]

#4) Cambiar el orden de un vector de 50 elementos, el de la posicion 1 es el de la 50 etc.

elementos_cincuenta = np.arange(50)
invertido = elementos_cincuenta[::-1]
print(invertido)

#[49 48 47 46 45 44 43 42 41 40 39 38 37 36 35 34 33 32 31 30 29 28 27 26
# 25 24 23 22 21 20 19 18 17 16 15 14 13 12 11 10  9  8  7  6  5  4  3  2
#  1  0]
#
#5) Crear una matriz de 3 x 3 con valores del cero al 8

matriz_tres = np.arange(9).reshape(3,3)
print(matriz_tres)

#[[0 1 2]
# [3 4 5]
# [6 7 8]]

#6) Encontrar los indices que no sean cero en un arreglo


import numpy as np
arreglo = [1,2,0,0,4,0]

no_zeros = np.nonzero(arreglo)
print(f'Los indices son:{no_zeros}')

#Los indices son:(array([0, 1, 4], dtype=int64),)

#7) Crear una matriz de identidad 3 x 3

identidad = np.eye(3)
print(identidad)

#[[1. 0. 0.]
# [0. 1. 0.]
# [0. 0. 1.]]
#
#8) Crear una matriz 3 x 3 x 3 con valores randomicos

matriz_tresd = np.random.random((3,3,3))
print(matriz_tresd)

#[[[0.4162304  0.8608377  0.3831413 ]
#  [0.72979538 0.85071447 0.9789751 ]
#  [0.75269764 0.37457465 0.53786243]]
#
# [[0.72687432 0.78087862 0.87956064]
#  [0.57228943 0.12153395 0.3810626 ]
#  [0.78255762 0.07447035 0.87113308]]
#
# [[0.33255699 0.79180609 0.29177933]
#  [0.88426574 0.43320042 0.45764751]
#  [0.43148007 0.07136557 0.93518022]]]

#9) Crear una matriz 10 x 10 y encontrar el mayor y el menor


matriz_diez = np.random.random((10,10))
print(matriz_diez)
print(f'\nEl mayor valor de la matriz es: {matriz_diez.max()}')
print(f'\nEl mayor valor de la matriz es: {matriz_diez.min()}')

#[[0.37105059 0.21259475 0.82587262 0.98119524 0.49086658 0.38744587
#  0.16624168 0.22387063 0.6269669  0.19327203]
# [0.95217889 0.11647666 0.25329446 0.11246645 0.54768067 0.60842382
#  0.49234445 0.34341891 0.58862466 0.91962592]
# [0.50953962 0.35598053 0.57835479 0.13596416 0.11609966 0.33476722
#  0.3187873  0.33135187 0.67314884 0.37153697]
# [0.41362457 0.97789071 0.98804667 0.27766958 0.52908557 0.07269738
#  0.16064247 0.69861043 0.96310551 0.44761632]
# [0.07476851 0.29312892 0.38807155 0.26823557 0.16973594 0.05216082
#  0.19507764 0.60421289 0.90028391 0.25313225]
# [0.39234836 0.26132672 0.88234089 0.70336658 0.07198605 0.17072044
#  0.10948146 0.59180962 0.04610318 0.1621318 ]
# [0.2265049  0.70010046 0.63596464 0.02203584 0.18024013 0.66563988
#  0.9685348  0.17135093 0.71762958 0.70533022]
# [0.71750002 0.76310821 0.50312964 0.53686636 0.02309478 0.68060817
#  0.63531616 0.21107275 0.44344024 0.22770844]
# [0.77774189 0.49105843 0.22626284 0.01532052 0.11118362 0.58666394
#  0.75677141 0.4688916  0.73981873 0.22791375]
# [0.44078774 0.42472403 0.14205986 0.76777431 0.64718213 0.29312844
#  0.01260762 0.0276974  0.58378985 0.56216143]]
#
#El mayor valor de la matriz es: 0.9880466659478905
#
#El mayor valor de la matriz es: 0.012607624230197567

#10) Sacar los colores RGB unicos en una imagen (cuales rgb existen ej: 0, 0, 0 - 255,255,255 -> 2 colores)

from scipy import ndimage
from scipy import misc

img = misc.face()
rgb = np.unique(img.reshape(-1, img.shape[2]), axis=0)
print(rgb)
print('--> 3 colores')

#[[  0   0   5]
# [  0   0   7]
# [  0   0   9]
# ...
# [255 248 255]
# [255 249 255]
# [255 252 255]]
#--> 3 colores

#11) ¿Como crear una serie de una lista, diccionario o arreglo?


import numpy as np
mylist = list('abcedfghijklmnopqrstuvwxyz')
myarr = np.arange(26)
mydict = dict(zip(mylist, myarr))

import pandas as pd
serie_lista = pd.Series(mylist)
serie_array = pd.Series(myarr)
serie_dict = pd.Series(mydict)
#print(serie_dict)

#a     0
#b     1
#c     2
#e     3
#d     4
#f     5
#g     6
#h     7
#i     8
#j     9
#k    10
#l    11
#m    12
#n    13
#o    14
#p    15
#q    16
#r    17
#s    18
#t    19
#u    20
#v    21
#w    22
#x    23
#y    24
#z    25
#dtype: int64
#
#12) ¿Como convertir el indice de una serie en una columna de un DataFrame?


mylist = list('abcedfghijklmnopqrstuvwxyz')
myarr = np.arange(26)
mydict = dict(zip(mylist, myarr))
ser = pd.Series(mydict) 
# Transformar la serie en dataframe y hacer una columna indice

#print(ser)
dt = ser.to_frame().reset_index
print(dt)

#<bound method DataFrame.reset_index of     0
#a   0
#b   1
#c   2
#e   3
#d   4
#f   5
#g   6
#h   7
#i   8
#j   9
#k  10
#l  11
#m  12
#n  13
#o  14
#p  15
#q  16
#r  17
#s  18
#t  19
#u  20
#v  21
#w  22
#x  23
#y  24
#z  25>
#
#13) ¿Como combinar varias series para hacer un DataFrame?

#

import numpy as np
ser1 = pd.Series(list('abcedfghijklmnopqrstuvwxyz'))
ser2 = pd.Series(np.arange(26))

df_de_series = pd.DataFrame({'Serie 1': ser1 , 'Serie 2' : ser2})
print(df_de_series)
#
#   Serie 1  Serie 2
#0        a        0
#1        b        1
#2        c        2
#3        e        3
#4        d        4
#5        f        5
#6        g        6
#7        h        7
#8        i        8
#9        j        9
#10       k       10
#11       l       11
#12       m       12
#13       n       13
#14       o       14
#15       p       15
#16       q       16
#17       r       17
#18       s       18
#19       t       19
#20       u       20
#21       v       21
#22       w       22
#23       x       23
#24       y       24
#25       z       25
#
#14) ¿Como obtener los items que esten en una serie A y no en una serie B?
#In [158]:

ser1 = pd.Series([1, 2, 3, 4, 5])
ser2 = pd.Series([4, 5, 6, 7, 8])
a_no_en_b = ser1[~ser1.isin(ser2)]

print(f'Los items de A que no estan en B son:\n{a_no_en_b}')

#Los items de A que no estan en B son:
#0    1
#1    2
#2    3
#dtype: int64
#
#15) ¿Como obtener los items que no son comunes en una serie A y serie B?
#In [159]:
#
ser1 = pd.Series([1, 2, 3, 4, 5])
ser2 = pd.Series([4, 5, 6, 7, 8])

a_no_en_b = ser1[~ser1.isin(ser2)]
b_no_en_a = ser2[~ser2.isin(ser1)]
no_comunes_a_b = np.append(a_no_en_b, b_no_en_a)
print(f'Los items que no son comunes en A y B son: {no_comunes_a_b} ')

#Los items que no son comunes en A y B son: [1 2 3 6 7 8] 

#16) ¿Como obtener el numero de veces que se repite un valor en una serie?
#In [173]:
#
ser = pd.Series(np.take(list('abcdefgh'), np.random.randint(8, size=30)))
print('valor/repeticiones')
print(ser.value_counts())

#valor/repeticiones
#h    8
#f    5
#a    4
#b    3
#d    3
#g    3
#e    2
#c    2
#dtype: int64
#
#17) ¿Como mantener los 2 valores mas repetidos de una serie, y a los demas valores cambiarles por 0 ?
#In [164]:
#
np.random.RandomState(100)
ser = pd.Series(np.random.randint(1, 5, [12]))
print('Serie')
print(ser)
print('\nValor/Repeticiones')
print(ser.value_counts())
ser[~ser.isin(ser.value_counts().index[:2])] = 0
print('\nSerie con ceros')
print(ser)

#Serie
#0     4
#1     3
#2     2
#3     2
#4     4
#5     2
#6     1
#7     3
#8     1
#9     1
#10    2
#11    3
#dtype: int32
#
#Valor/Repeticiones
#2    4
#3    3
#1    3
#4    2
#dtype: int64
#
#Serie con ceros
#0     0
#1     3
#2     2
#3     2
#4     0
#5     2
#6     0
#7     3
#8     0
#9     0
#10    2
#11    3
#dtype: int32
#
#18) ¿Como transformar una serie de un arreglo de numpy a un DataFrame con un shape definido?
#In [168]:
#
ser = pd.Series(np.random.randint(1, 10, 35))
#shape(7,5)

df_arreglo = pd.DataFrame(ser.values.reshape(7,5))
print(df_arreglo)

#   0  1  2  3  4
#0  9  1  9  8  8
#1  1  9  6  4  1
#2  9  9  1  7  9
#3  3  8  7  1  7
#4  9  5  1  7  9
#5  7  5  2  5  9
#6  9  3  2  4  4
#
#19) ¿Obtener los valores de una serie conociendo la posicion por indice?
#In [169]:
#
ser = pd.Series(list('abcdefghijklmnopqrstuvwxyz'))
pos = [0, 4, 8, 14, 20]
# a e i o u

ser.take(pos)

#Out[169]:
#
#0     a
#4     e
#8     i
#14    o
#20    u
#dtype: object
#
#20) ¿Como anadir series vertical u horizontalmente a un DataFrame?
#In [170]:
#
ser1 = pd.Series(range(5))
ser2 = pd.Series(list('abcde'))

#ser1.append(ser2)
df = pd.concat([ser1, ser2], axis=1)
print(df)
#
#   0  1
#0  0  a
#1  1  b
#2  2  c
#3  3  d
#4  4  e
#
#21)¿Obtener la media de una serie agrupada por otra serie?
#groupby tambien esta disponible en series.
#In [171]:
#
frutas = pd.Series(np.random.choice(['manzana', 'banana', 'zanahoria'], 10))
pesos = pd.Series(np.linspace(1, 10, 10))
#print(pesos.tolist())
#print(frutas.tolist())
#> [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0]
#> ['banana', 'carrot', 'apple', 'carrot', 'carrot', 'apple', 'banana', 'carrot', 'apple', 'carrot']

# Los valores van a cambiar por ser random
# apple     6.0
# banana    4.0
# carrot    5.8
# dtype: float64


pesos.groupby(frutas).mean()

#Out[171]:
#
#banana       8.500000
#manzana      3.600000
#zanahoria    6.666667
#dtype: float64
#
#22)¿Como importar solo columnas especificas de un archivo csv?
#In [172]:
#
#https://raw.githubusercontent.com/selva86/datasets/master/BostonHousing.csv.
path_archivo = 'https://raw.githubusercontent.com/selva86/datasets/master/BostonHousing.csv'

df_completo = pd.read_csv(path_archivo)
#print(df_completo)

columnas = ['crim', 'dis','rad', 'ptratio']
df_columnas = pd.read_csv(path_archivo,  usecols=columnas)
print(df_columnas.head())
#
#      crim     dis  rad  ptratio
#0  0.00632  4.0900    1     15.3
#1  0.02731  4.9671    2     17.8
#2  0.02729  4.9671    2     17.8
#3  0.03237  6.0622    3     18.7
#4  0.06905  6.0622    3     18.7
#



