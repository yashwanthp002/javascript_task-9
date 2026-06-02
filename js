let apiLink = "https://fakestoreapi.com/products";

let productsContainer = document.querySelector(".products");
let stats = document.querySelector(".stats");
let errorDiv = document.querySelector(".error");
let finalDiv = document.querySelector(".final");

fetch(apiLink)
.then((response) => response.json())
.then((products) => {

    stats.textContent = `Total Products : ${products.length}`;

    products.forEach((product) => {

        let card = document.createElement("div");
        card.setAttribute("class","card");

        let image = document.createElement("img");
        image.setAttribute("src", product.image);

        let title = document.createElement("h3");

        if(product.title.length > 30){
            title.textContent = product.title.slice(0,30) + "...";
        }else{
            title.textContent = product.title;
        }

        let price = document.createElement("p");
        price.textContent = `Price : $${product.price}`;

        let category = document.createElement("p");
        category.textContent = `Category : ${product.category}`;

        let description = document.createElement("p");

        if(product.description.length > 50){
            description.textContent =
            product.description.slice(0,50) + "...";
        }else{
            description.textContent =
            product.description;
        }

        let tag = document.createElement("span");
        tag.setAttribute("class","tag");

        if(product.price > 100){
            tag.textContent = "Expensive Product";
            tag.classList.add("expensive");
        }else{
            tag.textContent = "Budget Product";
            tag.classList.add("budget");
        }

        let btnContainer = document.createElement("div");
        btnContainer.setAttribute("class","buttons");

        let priceBtn = document.createElement("button");
        priceBtn.textContent = "Show Price";

        priceBtn.addEventListener("click", () => {
            alert(product.price);
        });

        let categoryBtn = document.createElement("button");
        categoryBtn.textContent = "Show Category";

        categoryBtn.addEventListener("click", () => {
            alert(product.category);
        });

        let detailsBtn = document.createElement("button");
        detailsBtn.textContent = "View Details";

        detailsBtn.addEventListener("click", () => {
            alert(
                `Title: ${product.title}
Price: $${product.price}
Category: ${product.category}`
            );
        });

        btnContainer.append(
            priceBtn,
            categoryBtn,
            detailsBtn
        );

        card.append(
            image,
            title,
            price,
            category,
            description,
            tag,
            btnContainer
        );

        productsContainer.append(card);

    });

})
.catch((error) => {

    errorDiv.textContent = "Something Went Wrong";

    errorDiv.style.backgroundColor = "red";
    errorDiv.style.color = "white";
    errorDiv.style.textAlign = "center";
    errorDiv.style.padding = "15px";

    console.log(error);

})
.finally(() => {

    finalDiv.textContent =
    "API Request Completed Successfully";

});
