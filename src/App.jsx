import './App.css';
import ProductPage from './components/ProductPage';
import MyName from './components/MyName';

function App() {
  const unusedVariable = 'This variable is not used anywhere in the code';
  return (
    <>
      <MyName />
      <ProductPage />
    </>
  )
}

export default App;
