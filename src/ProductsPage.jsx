
// import React, { useState, useEffect } from "react";
// import "./ProductsPage.css";

// const categories = [
//     { id: "icemojito", label: "Ice & Mojito", icon: "iceMojito" },
//     { id: "ice", label: "Ice", icon: "ice" },
//     { id: "milk", label: "Milk", icon: "milk" },
//     { id: "soda", label: "Soda Flav", icon: "soda" },
//     { id: "franchise", label: "Franchise Products", icon: "franchise" },
// ];

// const products = {
//     icemojito: [
//         { name: "Blue Curacao" },
//         { name: "Mint Mojhito" },
//         { name: "Water Melon" },
//         { name: "Chilli Mojhito" },
//         { name: "Falsa Ice" },
//         { name: "Guava Ice" },
//         { name: "Green Mango Ice" },
//         { name: "Lemon Ice" },
//         { name: "Lichy Ice" },
//         { name: "Pineapple Ice" },
//         { name: "Cranberry" },
//         { name: "Strawberry Ice Milk" },
//         { name: "Jeera Masala Ice" },
//         { name: "Kulfi Falooda" },
//         { name: "American Ice" },
//         { name: "Coffee" },
//         { name: "Pan Pasand" },
//         { name: "Kashmiri Gulab" },
//         { name: "Blue Lagoon" },
//         { name: "Pinaromance Mocktail" },
//         { name: "Passion Fruit Mocktail" },
//         { name: "Kala Khatta Ice" },
//         { name: "Wine Grapes" },
//     ],
//     franchise: [
//         { name: "Ice Crusher", img: "/products/ice-crusher.png" },
//         { name: "Cap Bottle (2 Piece)", img: "/products/cap-bottle.png" },
//         { name: "Jar (6 Piece)", img: "/products/jar.png" },
//         { name: "Big Plastic Funnel", img: "/products/funnel.png" },
//         { name: "Extra Syrup Bottle" }, // no image – SAFE
//     ],
// };

// function ProductsPage() {
//     const [activeTab, setActiveTab] = useState("icemojito");
//     const [animateKey, setAnimateKey] = useState(0);

//     useEffect(() => {
//         setAnimateKey((prev) => prev + 1);
//     }, [activeTab]);

//     return (
//         <div className="product-layout">

//             {/* SIDEBAR */}
//             <aside className="product-sidebar">
//                 <h3 className="sidebar-title">All Products</h3>

//                 {categories.map((cat) => (
//                     <div
//                         key={cat.id}
//                         className={`sidebar-item ${activeTab === cat.id ? "active" : ""}`}
//                         onClick={() => setActiveTab(cat.id)}
//                     >
//                         <img src={`/icons/${cat.icon}.png`} alt={cat.label} />
//                         <span>{cat.label}</span>
//                     </div>
//                 ))}
//             </aside>

//             {/* CONTENT */}
//             <main className="product-content" key={animateKey}>
//                 <div className="product-grid">
//                     {products[activeTab]?.map((item, index) => (
//                         <div
//                             key={index}
//                             className={`product-card ${item.img ? "has-image" : ""}`}
//                             style={{ animationDelay: `${index * 60}ms` }}
//                         >
//                             <span className="product-title">{item.name}</span>

//                             <div
//                                 key={index}
//                                 className={`product-card ${item.img ? "has-image" : ""}`}
//                                 style={{ animationDelay: `${index * 60}ms` }}
//                             >
//                                 {item.img && (
//                                     <div className="product-image-wrap">
//                                         <img
//                                             src={item.img}
//                                             alt={item.name}
//                                             className="product-image"
//                                         />
//                                     </div>
//                                 )}

//                                 <span className="product-title">{item.name}</span>
//                             </div>

//                         </div>
//                     ))}
//                 </div>
//             </main>

//         </div>
//     );
// }

// export default ProductsPage;

import React, { useState, useEffect } from "react";
import "./ProductsPage.css";

const categories = [
  { id: "icemojito", label: "Ice & Mojito", icon: "https://www.notica.in/botanica.risingbamboo.com/drinks-01/assets/CategoryImage/Ice-Mojhito.webp" },
  { id: "ice", label: "Ice", icon: "https://www.notica.in/botanica.risingbamboo.com/drinks-01/assets/CategoryImage/Ice-Mojhito.webp" },
  { id: "milk", label: "Milk", icon: "https://www.notica.in/botanica.risingbamboo.com/drinks-01/assets/CategoryImage/Ice-Mojhito.webp" },
  { id: "soda", label: "Soda Flav", icon: "https://www.notica.in/botanica.risingbamboo.com/drinks-01/assets/CategoryImage/Ice-Mojhito.webp" },
  { id: "franchise", label: "Franchise Products", icon: "https://www.notica.in/botanica.risingbamboo.com/drinks-01/assets/CategoryImage/Ice-Mojhito.webp" },
];

const products = {
  icemojito: [
    { name: "Blue Curacao" },
    { name: "Mint Mojhito" },
    { name: "Water Melon" },
    { name: "Chilli Mojhito" },
    { name: "Falsa Ice" },
    { name: "Guava Ice" },
    { name: "Green Mango Ice" },
    { name: "Lemon Ice" },
    { name: "Lichy Ice" },
    { name: "Pineapple Ice" },
    { name: "Cranberry" },
    { name: "Strawberry Ice Milk" },
    { name: "Jeera Masala Ice" },
    { name: "Kulfi Falooda" },
    { name: "American Ice" },
    { name: "Coffee" },
    { name: "Pan Pasand" },
    { name: "Kashmiri Gulab" },
    { name: "Blue Lagoon" },
    { name: "Pinaromance Mocktail" },
    { name: "Passion Fruit Mocktail" },
    { name: "Kala Khatta Ice" },
    { name: "Wine Grapes" },
  ],
   ice: [
    { name: "Blue Curacao" },
    { name: "Mint Mojhito" },
    { name: "Water Melon" },
    { name: "Chilli Mojhito" },
    { name: "Falsa Ice" },
    { name: "Guava Ice" },
    { name: "Green Mango Ice" },
    { name: "Lemon Ice" },
    { name: "Lichy Ice" },
   ],
   milk: [
    { name: "Blue Curacao" },
    { name: "Mint Mojhito" },
    { name: "Water Melon" },
    { name: "Chilli Mojhito" },
    { name: "Falsa Ice" },
    { name: "Guava Ice" },
    { name: "Green Mango Ice" },
    { name: "Lemon Ice" },
    { name: "Lichy Ice" },
   ],
   soda: [
    { name: "Blue Curacao" },
    { name: "Mint Mojhito" },
    { name: "Water Melon" },
    { name: "Chilli Mojhito" },
    { name: "Falsa Ice" },
    { name: "Guava Ice" },
    { name: "Green Mango Ice" },
    { name: "Lemon Ice" },
    { name: "Lichy Ice" },
   ],
  franchise: [
    { name: "Ice Crusher", img: "https://www.notica.in/botanica.risingbamboo.com/drinks-01/assets/Services/FountainMachine.webp" },
    { name: "Cap Bottle (2 Piece)", img: "https://www.notica.in/botanica.risingbamboo.com/drinks-01/assets/Services/FountainMachine.webp" },
    { name: "Jar (6 Piece)", img: "https://www.notica.in/botanica.risingbamboo.com/drinks-01/assets/Services/FountainMachine.webp" },
    { name: "Big Plastic Funnel", img: "https://www.notica.in/botanica.risingbamboo.com/drinks-01/assets/Services/FountainMachine.webp" },
    { name: "Extra Syrup Bottle", img: "https://www.notica.in/botanica.risingbamboo.com/drinks-01/assets/Services/FountainMachine.webp"  },
  ],
};

function ProductsPage() {
  const [activeTab, setActiveTab] = useState("icemojito");
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    setAnimateKey((prev) => prev + 1);
  }, [activeTab]);

  return (
    <div className="product-layout">

      {/* SIDEBAR */}
      <aside className="product-sidebar">
        <h3 className="sidebar-title">All Products</h3>

        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`sidebar-item ${activeTab === cat.id ? "active" : ""}`}
            onClick={() => setActiveTab(cat.id)}
          >
            <img src={cat.icon} alt={cat.label} />
            <span>{cat.label}</span>
          </div>
        ))}
      </aside>

      {/* CONTENT */}
      <main className="product-content" key={animateKey}>
        <div className="product-grid">
          {products[activeTab]?.map((item, index) => (
            <div
              key={index}
              className={`product-card ${item.img ? "has-image" : ""}`}
              style={{ animationDelay: `${index * 60}ms` }}
            >
              {item.img && (
                <div className="product-image-wrap">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="product-image"
                  />
                </div>
              )}

              <span className="product-title">{item.name}</span>
            </div>
          ))}
        </div>
      </main>

    </div>
  );
}

export default ProductsPage;
