const data =[
        {item:"MARINARA", ingredients:"Tomato Sauce, Garlic, Oregano, Olive Oil", price:"300", link:"", type:"Veg" },
        {item:"MARGHERITA", ingredients:"Tomato Sauce, Mozzarella, Basil, Olive Oil", price:"360", link:"", type:"Veg" },
        {item:"MEDITERRANEA", ingredients:"Tomato Sauce, Mozzarella, Onions, Black Olives, Oregano", price:"410", link:"", type:"Veg" },
        {item:"ITALIA", ingredients:"Tomato Sauce, Mozzarella, Ricotta Cheese, Spinach, Cherry Tomato, Parmesan Cheese", price:"450", link:"", type:"Veg" },
        {item:"ORTOLANA", ingredients:"Tomato Sauce, Mozzarella, Grilled Zucchini, Eggplant, Capsicum, Onions, Spinach", price:"450", link:"", type:"Veg" },
        {item:"PARMIGIANA", ingredients:"Tomato Sauce, Mozzarella, Grilled Eggplant, Parmesan Cheese, Homemade Sundried Tomato In Garlic & Herb Oil", price:"480", link:"", type:"Veg" },
        {item:"RUCOLA E GRANA", ingredients:"Mozzarella, Cherry Tomatoes, Rocket Leaves, Parmesan Cheese", price:"480", link:"", type:"Veg" },
        {item:"QUATTRO FORMAGGI", ingredients:"Tomato Sauce, Mozzarella, Blue Cheese, Smoked Cheese, Ricotta Cheese", price:"540", link:"", type:"Veg" },
        {item:"CALZONE ALLE VERDURE", ingredients:"Folded Pizza With Mixed Vegetables, Tomato Sauce, Mozzarella Cheese", price:"500", link:"", type:"Veg" },
        {item:"PESTO", ingredients:"Base Of Mozzarella & Homemade Basil Pesto, Ricotta Cheale Homemade Sundried Tomato In Garlic & Herbs", price:"540", link:"", type:"Veg" },
        {item:"CACCIATORA", ingredients:"Tomato Sauce, Mozzarella, Chicken Cacciatora, Rosemary", price:"450", link:"", type:"Non-veg" },
        {item:"DIAVOLA", ingredients:"Tomato Sauce, Mozzarella, Spicy Salami, Spicy Homemade Olive Oil", price:"480", link:"", type:"Non-veg" },
        {item:"SICILIANA", ingredients:"Tomato Sauce, Mozzarella, Black Olives, Capers, Anchovies", price:"540", link:"", type:"Non-veg" },
        {item:"BOSCAIOLA", ingredients:"Tomato Sauce, Mozzarella, Mushrooms, Green Olives, Cotto Ham", price:"540", link:"", type:"Non-veg" },
        {item:"CARBONARA", ingredients:"Base Of Mozzarella, Onions, Egg, Speck Ham, Parmesan Cheese", price:"540", link:"", type:"Non-veg" },
        {item:"ARRABBIATA", ingredients:"Tomato Sauce, Mozzarella, Capsicum, Green Chilly, Garlic, Spicy Salami, Jalapenos", price:"540", link:"", type:"Non-veg" },
        {item:"CALZONE FUNGHI E SALSICCIA", ingredients:"Folded Pizza Stuffed With Pork Or Chicken Sausage, Mushroom, Onion, Mozzarella Cheese & Tomato Sauce", price:"540", link:"", type:"Non-veg" },
        {item:"BELLA SPECIAL", ingredients:"Bacon, Onions, Salami, Jalapeños, mushrooms,green Peppers", price:"550", link:"", type:"Non-veg" },
        {item:"GOAN CHORIZO", ingredients:"Tomato Sauce, Mozzarella, Onions, Fresh Tomatoes, Goan Chorizo, Egg", price:"550", link:"", type:"Non-veg" },
        {item:"PARIGINA", ingredients:"Tomato, Mozzarella, Parma Ham, White Cream", price:"540", link:"", type:"Non-veg" },
        {item:"TIROLESE", ingredients:"Tomato Sauce, Mozzarella, Mushrooms, Smoked Cheese. Speck Ham", price:"590", link:"", type:"Non-veg" }
    ];

function all_pizza(){
    var container = document.getElementById("pizzas");
    container.innerHTML = '';

    const vegPizza = data;
    vegPizza.forEach(function(pizza) {
        
            var div = document.createElement("div");
            div.className="col-md-4 mb-4";
            div.innerHTML=`
                <div class="card">
                    <div class="card-img-top">
                        <img src="./images/sample_pizza.jpeg" class="card-img-top" alt="Pizza Image">
                        <i class="${pizza.type}">${pizza.type}</i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${pizza.item}</h5>
                        <p class="card-text">${pizza.ingredients}</p>
                        <p class="card-text">Price: $ ${pizza.price}</p>
                        
                    </div>
                </div>
            `;

            container.appendChild(div);
    });
}

function veg_pizza(){
    var container = document.getElementById("pizzas");
    container.innerHTML = '';

    const vegPizza = data.filter(pizza => pizza.type === "Veg")
    vegPizza.forEach(function(pizza) {
        
            var div = document.createElement("div");
            div.className="col-md-4 mb-4";
            div.innerHTML=`
                <div class="card">
                    <div class="card-img-top">
                        <img src="./images/sample_pizza.jpeg" class="card-img-top" alt="Pizza Image">
                        <i class="${pizza.type}">${pizza.type}</i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${pizza.item}</h5>
                        <p class="card-text">${pizza.ingredients}</p>
                        <p class="card-text">Price: $ ${pizza.price}</p>
                        
                    </div>
                </div>
            `;

            container.appendChild(div);
    });
}

function nonVeg_pizza(){
    var container = document.getElementById("pizzas");
    container.innerHTML = '';
    
    const NonvegPizza = data.filter(pizza => pizza.type==="Non-veg");

    NonvegPizza.forEach(function(pizza) {
        
            var div = document.createElement("div");
            div.className="col-md-4 mb-4";
            div.innerHTML=`
                <div class="card">
                    <div class="card-img-top">
                        <img src="./images/sample_pizza.jpeg" class="card-img-top" alt="Pizza Image">
                        <i class="${pizza.type}">${pizza.type}</i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${pizza.item}</h5>
                        <p class="card-text">${pizza.ingredients}</p>
                        <p class="card-text">Price: $ ${pizza.price}</p>
                        
                    </div>
                </div>
            `;

            container.appendChild(div);
    });
}   

function onFilterChange(){
    const filterValue = document.getElementById("filterSelect").value;
    if (filterValue==="all"){
        all_pizza();
    }
    else if (filterValue==="Veg"){
        veg_pizza();
    }
    else{
        nonVeg_pizza();
    }
}

document.getElementById("filterSelect").addEventListener("change",onFilterChange);

all_pizza();