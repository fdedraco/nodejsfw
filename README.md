nodejsfw framework iot made by [fathin](about.me/fathinluqman)

made to demonstrate steps by steps of implementing iot system based on nodejs

--------

**Step 1:**

awalnya kita buat server merespon http POST request dari client


sebelum kita mulai mencoding kita harus persiapkan file package.json yang menjelaskan tentang project kita dan dependency nya

```
>npm init
```
isi deskripsi project yang dibuat terlebih dahulu, lalu install modul **express**

```
>npm install express --save
```

tambahkan require pada main.js
sehingga modul express dapat dipanggil. Harus diingat kalau require harus ada *sebelum* dipanggil.
```
var express = require('express');
var app = require('express')();
```
