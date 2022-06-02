# KafkaProje
Apache Kafka ile Javascript Uygulaması

### Projeyi Çalıştırmak için Kurulu Olması Gereken Programlar

Docker, Apache Kafka, Zookeeper ve Curl programları bilgisayarınızda kurulu olmalıdır.

### Projenin Kurulumu ve Çalıştırılması

Bu projeyi bilgisayarınızda çalıştırmak için proje dosyasını zip olarak bilgisayarınıza indirebilirsiniz. 
Git üzerinden indirmek için belirlediğiniz klasöre gidiniz ve aşağıdaki komutu giriniz.

```
git clone https://github.com/lonelyridah/KafkaProje.git
```
Ardından projeyi çalıştırmak için bilgisayarınızda Docker'ı açınız ve projenin yer aldığı klasörün içinde bulunan KafkaProje isimli klasöre gidiniz.
Bu klasörün adresini kopyalayınız. Terminali açınız ve cd komutunu kullanarak KafkaProje klasörünün adresine gidiniz. 
Terminalde aşağıda yer alan komutu çalıştırınız.

```
docker-compose up --build
```
Projeyi çalıştırdıktan sonra curl aracılığıyla çağrı yapmak için aşağıda yer alan komutu çalıştırınız.

```
curl -X POST  -d "[{\"id\":\"1\"},{\"id\":\"2\"}]" -H "Content-Type: application/json" localhost:3000/gonderici
```
Curl komutunu çalıştırdıktan sonra terminalde aşağıda yer alan çıktıyı alacaksınız.

<pre>
<i>
    Gondericiden-Gelen-Mesaj => {"id":"1"},, Partition-Degeri => 0
</i>
</pre>
