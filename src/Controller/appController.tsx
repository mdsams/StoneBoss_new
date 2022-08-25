import {ProductData, OrderData} from './Urls';

export async function getProductDetails(productCode: string) {
  try {
    const response = await fetch(
      `${ProductData}get-product-detail/${productCode}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await response.json();
    if (data?.product.length !== 0) {
      console.log(data);
      return data?.product;
    }
  } catch (error) {
    console.error(error);
  }
}

interface productDataInterface {
  ProdCode: string;
  BarCode: string;
}
export async function postProductDetails(productData: productDataInterface[]) {
  console.log({ProductData: productData});
  try {
    const response = await fetch(`${ProductData}update-product-detail`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ProductData: productData}),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getOrderDetails(salesOrder: string) {
  try {
    const response = await fetch(`${OrderData}get-order-detail/${salesOrder}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function updateOrderDetails() {
  try {
    const response = await fetch(`${OrderData}update-order-item/476319`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const {data} = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
