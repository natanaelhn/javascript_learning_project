1. Sebagai contoh, kita akan menggunakan package lodash. Lodash adalah package yang berisi banyak utilitas untuk memudahkan kita dalam menulis kode JavaScript, khususnya yang berhubungan dengan array, object, string, dll.
```
    npm install lodash
```
Setelah instalasi berhasil, buka dan periksa file package.json Anda. Akan muncul object baru dependencies berisi package yang telah kita tambahkan ke dalam project diikuti dengan versinya.


2. Objek dependencies merupakan objek yang menampung package yang kita gunakan untuk membuat aplikasi. Sedangkan objek devDependencies digunakan untuk package yang berkaitan hanya saat proses pengembangan aplikasi, contohnya seperti package jest yang digunakan untuk testing. Package seperti jest ini hanya digunakan saat proses pengembangan aplikasi. Ia tidak digunakan lagi ketika aplikasi rilis atau digunakan langsung oleh pengguna.

Untuk memasang package sebagai devDependencies, kita bisa menambahkan parameter --save-dev pada perintah npm install.
```
    npm install <package-name> --save-dev
```
Setelah package terpasang, maka akan ditambahkan ke berkas package.json.


3. Karena merupakan module, kita bisa menambahkan kode dari package menggunakan keyword import seperti yang telah dipelajari pada materi Module.
```
    import variableName from 'package-name';
```
Sehingga, untuk menggunakan kode dari package lodash yang telah kita pasang, tambahkan kode berikut pada berkas index.js:
```
    import _ from 'lodash';
```


4. Untuk melakukannya cukup mudah. Jika package berada pada objek dependencies, kita dapat menghapusnya menggunakan perintah:
```
    npm uninstall <package-name>
```
Jika package terdapat pada devDependencies, kita cukup menambahkan --save-dev di akhir perintahnya.
```
    npm uninstall <package-name> --save-dev
```
Contoh, jika kita ingin menghapus package lodash dari project, berarti tuliskan perintah:
```
    npm uninstall lodash
```
Selain menghapus nilainya dari package.json, perintah tersebut juga akan menghapus semua berkas yang berhubungan dengan package lodash pada folder node_modules.

Setelah menghapus package, tentu fungsi-fungsi dari package lodash sudah tidak dapat kita gunakan lagi.
