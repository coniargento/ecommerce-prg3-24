import Inner from "@/app/components/Inner";
import ProductsCheckout from "@/app/components/cart/ProductsCheckout";
import FormCheckout from "@/app/components/cart/FormCheckout";


const Cart = () => {
  return (
    <section className='h-screen'>
      <Inner>
        <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6">
              <FormCheckout />
            </div >
            <div className="col-span-12 lg:col-span-6">
              <ProductsCheckout />
            </div >
        </div>
      </Inner>
    </section>
  )
}

export default Cart