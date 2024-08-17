// class ProductCategoryRow extends React.Component {
//     render() {
//       const category = this.props.category;
//       return (
//         <tr>
//           <th colSpan="2">
//             {category}
//           </th>
//         </tr>
//       );
//     }
//   }
  
//   class ProductRow extends React.Component {
//     render() {
//       const product = this.props.product;
//       const name = product.stocked ?
//         product.name :
//         <span style={{color: 'red'}}>
//           {product.name}
//         </span>;
  
//       return (
//         <tr>
//           <td>{name}</td>
//           <td>{product.price}</td>
//         </tr>
//       );
//     }
//   }
  
//   class ProductTable extends React.Component {
//     render() {
//       const rows = [];
//       let lastCategory = null;
      
//       this.props.products.forEach((product) => {
//         if (product.category !== lastCategory) {
//           rows.push(
//             <ProductCategoryRow
//               category={product.category}
//               key={product.category} />
//           );
//         }
//         rows.push(
//           <ProductRow
//             product={product}
//             key={product.name} />
//         );
//         lastCategory = product.category;
//       });
  
//       return (
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Price</th>
//             </tr>
//           </thead>
//           <tbody>{rows}</tbody>
//         </table>
//       );
//     }
//   }
  
//   class SearchBar extends React.Component {
//     render() {
//       return (
//         <form>
//           <input type="text" placeholder="Search..." />
//           <p>
//             <input type="checkbox" />
//             {' '}
//             Only show products in stock
//           </p>
//         </form>
//       );
//     }
//   }
  
//   class FilterableProductTable extends React.Component {
//     render() {
//       return (
//         <div>
//           <SearchBar />
//           <ProductTable products={this.props.products} />
//         </div>
//       );
//     }
//   }
  
  
//   const PRODUCTS = [
//     {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
//     {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//     {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
//     {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//     {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//     {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
//   ];
   
//   ReactDOM.render(
//     <FilterableProductTable products={PRODUCTS} />,
//     document.getElementById('container')
//   );



// import React from 'react';
// import CodeMirror from '@uiw/react-codemirror';
// import { javascript } from '@codemirror/lang-javascript';

// class CodeEditor extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       code: "// Write your JavaScript code here\nconsole.log('Hello, world!');"
//     };
//   }

//   handleChange = (value) => {
//     this.setState({ code: value });
//   };

//   runCode = () => {
//     try {
//       // eslint-disable-next-line no-eval
//       eval(this.state.code);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   render() {
//     return (
//       <div>
//         <CodeMirror
//           value={this.state.code}
//           height="300px"
//           extensions={[javascript({ jsx: true })]}
//           onChange={this.handleChange}
//           theme="light" // Optional: Set a theme for better visibility
//         />
//         <button onClick={this.runCode}>Run</button>
//       </div>
//     );
//   }
// }

// export default CodeEditor;


import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { monokai } from '@uiw/codemirror-theme-monokai';

const extensions = [javascript({ jsx: true })];

export default function CodeBlock() {
  return (
    <CodeMirror
      value="
      //write your code here
      "
      height="300px"
      theme={monokai}
      extensions={[javascript({ jsx: true })]}
    />
  );
}

