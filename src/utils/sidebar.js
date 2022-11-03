import React from "react";
import useId from "../hooks/useId";
import Generic from "../pages/Generic";
import { ReactComponent as Order } from '../assets/icons/order.svg';
import { ReactComponent as Home } from '../assets/icons/home.svg';
import { ReactComponent as Product } from '../assets/icons/product.svg';
import { ReactComponent as Review } from '../assets/icons/review.svg';
import { ReactComponent as CheckoutIcon } from '../assets/icons/checkout.svg';


const Checkout = React.lazy(() => import('../pages/Checkout'));
const CheckoutDetails = React.lazy(() => import('../pages/CheckoutDetails'));


export const sidebar = [
   {
      id: useId,
      element: <Generic />,
      title: 'Главная',
      path: '/home',
      Icon: <Home />,
      private: false,
      hidden: false
   },
   {
      id: useId,
      element: <Generic />,
      title: 'Заказы',
      path: '/order',
      Icon: <Order />,
      private: false,
      hidden: false
   },
   {
      id: useId,
      element: <Generic />,
      title: 'Товары',
      path: '/product',
      Icon: <Product />,
      private: false,
      hidden: false
   },
   {
      id: useId,
      element: <Generic />,
      title: 'Отзывы',
      path: '/review',
      Icon: <Review />,
      private: false,
      hidden: false
   },
   {
      id: useId,
      element: (
         <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
            <Checkout />
         </React.Suspense>
      ),
      title: 'Оформить заказ',
      path: '/checkout',
      Icon: <CheckoutIcon />,
      private: false,
      hidden: false
   },
   {
      id: useId,
      element: (
         <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
            <CheckoutDetails />
         </React.Suspense>
      ),
      title: 'Оформить заказ',
      path: '/checkout/:id',
      private: false,
      hidden: true
   }
]