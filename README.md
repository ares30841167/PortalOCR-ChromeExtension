# PortalOCR-ChromeExtension
YZUPortal 驗證碼OCR: Tesseract + GraphicsMagick + Node.js API

## 說明
此chrome插件基於 [Tyzesc](https://github.com/tyzesc/Portal-OCR) 的Code做實例化，以Node.js + Express 將處理Captcha的部分寫成API(處理部分詳請見Tyzesc的Repository)，讓使用者可以透過此插件將Portal登入頁面上的Captcha自動送到伺服器處理後，將回傳的結果自動填入驗證碼的欄位裡。

## 安裝
1. 開啟Chrome瀏覽器後，點選右上角的**選單按鈕**</br>
![](https://i.imgur.com/H0Oa15d.png)
2. 進入**更多工具**->**擴充功能**</br>
![](https://i.imgur.com/k461HKj.png)
3. 開啟右上角的**開發人員模式**，之後點選左上角的**載入未封裝項目**</br>
![](https://i.imgur.com/g3PdEYS.png)
4. 選擇你剛剛下載並解壓此項目的資料夾</br>
![](https://i.imgur.com/2VvZGlZ.png)
5. 完成</br>
![](https://i.imgur.com/ZQSh7AQ.png)

## 使用
只要進入Portal登入頁面，插件自動做動。如果你手動重整驗證碼，或是驗證碼辨識不太正確，你可以選擇:
1. 重整頁面讓插件重新做動
2. 按一下右上角的插件icon插件一樣會在執行一次

## 最後...
- 插件會隨重整驗證碼執行之後我想改再補上
- Code懶得註解請見諒
- 因為此插件會將照片傳回我的伺服器做處理，所以此插件存活時間就看我伺服器的狀況，什麼時候突然不能用都有可能...
- 擴充功能裡有時候有錯誤請無視，可能是網路或是抓圖片的時候有誤，不影響使用，再試一次即可
