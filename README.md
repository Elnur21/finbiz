<h1>Finbiz</h1>

---

<h2>Serveri run etmek ucun:</h2>

```sh
$ node ./server/app.js
```

---

<h2>Sassi run etmek ucun:</h2>

```sh
$ npm run sass
```

---

<h2>Test run etmek ucun:</h2>

<h3>1ci komanda:</h3>

```sh
$ npm run jest
```

<h3>2ci komanda:</h3>

```sh
$ node ./test/index.spec.js
```

<p>
<span style="color:red">
Qeyd 1:
</span> <span style="color:green">1ci test komandasini</span> isletdikde sehvler cixa biler amma <span style="color:green">2ci test komandasini</span>  isletdikde hemin <span style="color:red">sehvler</span> aradan qalxacaq cunki <span style="color:green">1ci komanda</span> <span style="color:blue">index.spec.js</span> ucun islemir 
</p>

<p>
<span style="color:red">
Qeyd 2:
</span> <span style="color:green">2ci test komandasini</span> isletdikde sehvler cixa biler amma <span style="color:blue">index.js</span> (assetsde olan) fayli icinde <b><span style="color:red">en sonuncu</span></b> setri silerek bu sehvlerin qarsisini almaq olar, <b><span style="color:red">amma</span></b> testlere baxdiqdan sonra bu setri evvelki veziyyetine getirmek lazimdir.
</p>
