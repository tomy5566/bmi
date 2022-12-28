# 身體質量指數 BMI 計算機 練習專案 Readme

## 主要介紹
使用身體質量指數 BMI ，利用localstorage建立自己的健康紀錄表，並用顏色區分BMI，可逐項刪除。

## DEMO link
[https://tomy5566.github.io/bmi/](https://tomy5566.github.io/bmi/)

## 使用技術
- HTML
- CSS: [flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)
- JavaScript 
- [localStorage](https://developer.mozilla.org/zh-TW/docs/Web/API/Window/localStorage)

## JavaScript 使用技術介紹

1. 使用 HTML 建立起計算機版型， 監聽輸入欄位的值與行為。
2. 計算 BMI 身體質量指數，判斷 BMI 的健康標準，並利用 [localStorage.setItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem) 將值存入。
3. 展示上述計算結果，使用[localStorage.getItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem) 將成果加入列表。
4. 設計使用不同顏色(藍:過輕，綠:標準，橘:過重，紅:肥胖 )，利用CSS去更新HTML元素以輕鬆區別計算結果，顯示於按鈕外框與下方清單列左方。
5. 設計 重新計算圖示 優化UI/UX 便於操作，重新計算。
6. 使用 [JavaScript Date](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date) 物件，讓每項計算值均能自動記錄計算日期。
7. 使用[ HTMLElement.dataset ](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)讓下方列表可以單獨刪除特定筆紀錄。
8. 使用[ localStorage.clear](https://developer.mozilla.org/en-US/docs/Web/API/Storage/clear) 可以一次清除所以列表紀錄值。

## 功能介紹
- 可輸入身高與體重數值，快速計算BMI結果。
- 計算結果利用顏色區分BMI的健康標準，分為藍色過輕，綠色標準，橘色過重，紅色肥胖四種，可一目了然。
- 將計算結果與顏色，同步顯示於按鈕上，並設置"重置"圖標利於使用者操作。
- 將計算結果與顏色條列式記錄於下方欄位中，並自動標註記算日期，方便使用者把瀏覽器當作BMI健康管理日誌。
- 上述條列式紀錄，可以單除刪除某筆資料，或是想要全部刪除資料，亦可使用右下角案鳥操作進行。

## 介面展示
![image](https://github.com/tomy5566/bmi/blob/main/BMIDEMO.gif)


## 參考資料
六角學院JavaScrip線上課程
