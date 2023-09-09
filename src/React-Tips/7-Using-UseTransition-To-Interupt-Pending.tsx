import { useState, useTransition } from "react";

// src: https://www.youtube.com/shorts/3Tvl1n4FsKY

const UsingUseTransitionToInteruptPending = () => {

  const home = () => {
    return (<h1>Home Page</h1>)
  }
  const about = () => {
    return (<h1>About Page</h1>)
  }
  const products = () => {
    let productList = [];
    for (let i = 0; i < 100; i++) {
      productList.push(slowLoading(i));
    }
    return (
      <div>
        {productList.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </div>
    )
  }
  const slowLoading = (index: number) => {
    let startTime = performance.now();
    while (performance.now() - startTime < 5) {
    }
    return `Product #${index + 1}`;
  }

  type Tab = 'home' | 'about' | 'products';
  const [tab, setTab] = useState<Tab>('home');

  const currentContent =
    tab === 'home' ? home() :
      tab === 'about' ? about() :
        tab === 'products' ? products() : null;

        
  // ================= BEFORE =================
  const handlesetTab = (content: Tab) => {
    setTab(content);
  }

  // ================= AFTER =================
  const [isPending, startTransition] = useTransition();

  const handlesetTab2 = (content: Tab) => {
    startTransition(() => {
      setTab(content);
    })
  }


  return (
    <div>
      <div className="flex gap-10 underline underline-offset-4">
        <div
          className="cursor-pointer text-xl"
          onClick={() => handlesetTab2('home')}>Home</div>
        <div
          className="cursor-pointer text-xl"
          onClick={() => handlesetTab2('about')}>About</div>
        <div
          className="cursor-pointer text-xl"
          onClick={() => handlesetTab2('products')}>Products</div>
      </div>
      <div>
        {currentContent}
      </div>
    </div>
  )
}

export default UsingUseTransitionToInteruptPending