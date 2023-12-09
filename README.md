This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). 

## Screenhot

![output)](https://github.com/Shivam-ssy/FrontendMentorChallanges/assets/136052614/a73bbd68-bb3d-43d5-9d95-0ce948d69f06)


# my process
### Build with
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QR</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="main">
        <div class="container">
           <div class="favicon">
            <!-- <img src="images/image-qr-code.png" alt=""> -->
        </div>
            <div class="text">
                <h3>Improve your front-end <br>skills by building projects</h3>
                <p>Scan the QR code to visit Frontend <br> Mentor and take your coding skills to <br> the next level</p>
            </div>
        </div>
    </div>
</body>
</html>
```

```css
*{
    margin:0;
    padding:0;

}
.main{
    background-color:  hsl(212, 45%, 89%);
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

}
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background-color: white;
    border-radius: 10px;
    position: relative;
}
.favicon{
    width: 18rem;
    height: 18rem;
    background-image: url("images/image-qr-code.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: inherit;
    margin-bottom: 15px;
    border-radius: 20px;
}

.text h3{
    margin-bottom: 18px;
    font-weight: 700;
}
.text p{
    margin-bottom: 25px;
}
.text{
    text-align: center;
}
```


## Author
- Website - [Shivam Singh Yadav](https://lighthearted-cat-0fa85a.netlify.app/)
- Frontend Mentor - [Shivam-ssy](https://www.frontendmentor.io/profile/Shivam-ssy)
