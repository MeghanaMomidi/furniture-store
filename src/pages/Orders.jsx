import { redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from '../utils';
import { OrdersList, ComplexPaginationContainer, SectionTitle } from '../components';



export const loader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      toast.warn("You must be logged in to view the orders");
      return redirect("/login");
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]); // for pagination

    try {
      const response = await customFetch.get("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      console.log(response);
      return { orders: response.data.data, meta: response.data.meta };

    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error placing your order";//here optional chaining is used bcoz in some instances we might be  getting axios error and there is no status in the response so we might get a bug
      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) return redirect("/login");
      return null;
    }
  };
 
const Orders = () => {
    const {meta} = useLoaderData();
    if(meta.pagination.total <1){
        <SectionTitle text='Please make an order'/> 
    }
  return (
    <>
      <SectionTitle text='Your Orders'/>
      <OrdersList/>
      <ComplexPaginationContainer/>
    </>
  );
};
export default Orders;
