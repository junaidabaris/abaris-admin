import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://etg-backend-project-node-abarisapp.vercel.app/api/' }),
    // tagTypes: ['Post'],
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => ({
                url: 'product',
                method: 'GET'
            })
        }),

        getCategories: builder.query({
            query: () => ({
                url: 'category',
                method: 'GET'
            })
        }),

        getBrands: builder.query({
            query: () => ({
                url: 'brand',
                method: 'GET'
            })
        }),

        getSizes: builder.query({
            query: () => ({
                url: 'size',
                method: 'GET'
            })
        }),

        getBanner: builder.query({
            query: () => ({
                url: 'banner',
                method: 'GET'
            })
        }),

        getPickupPoint: builder.query({
            query: () => ({
                url: 'pickupPoints',
                method: 'GET'
            })
        }),

        getCustomers: builder.query({
            query: () => ({
                url: 'customer',
                method: 'GET'
            })
        }),

        getSellers: builder.query({
            query: () => ({
                url: 'sellerList',
                method: 'GET'
            })
        }),
        getTicketLists: builder.query({
            query: () => ({
                url: 'ticketList',
                method: 'GET'
            })
        }),

        getLanguages: builder.query({
            query: () => ({
                url: 'language',
                method: 'GET'
            })
        }),

        getPages: builder.query({
            query: () => ({
                url: 'pages',
                method: 'GET'
            })
        }),

        getCurrency: builder.query({
            query: () => ({
                url: 'currency',
                method: 'GET'
            })
        }),

        getOrders: builder.query({
            query: () => ({
                url: 'order/getallorders',
                method: 'GET'
            })
        }),

        getCoupons: builder.query({
            query: () => ({
                url: 'coupons',
                method: 'GET'
            })
        }),

        addNewSize: builder.mutation({
            query: (payload) => ({
                url: 'size/add_size',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        addNewBrand: builder.mutation({
            query: (payload) => ({
                url: 'brand/add_brand',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        editBrand: builder.mutation({
            query: (payload) => ({
                url: 'brand/add_brand',
                method: 'PUT',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        addNewCategory: builder.mutation({
            query: (payload) => ({
                url: 'category/add_category',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        addPickUpPoint: builder.mutation({
            query: (payload) => ({
                url: 'pickupPoints/add',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        getCurrencyById: builder.query({
            query: (id) => ({
                url: `Currency/${id}`,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        getCouponById: builder.query({
            query: (id) => ({
                url: `coupons/${id}`,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        addNewCurrency: builder.mutation({
            query: (payload) => ({
                url: 'currency/add_Currency',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        addNewLanguage: builder.mutation({
            query: (payload) => ({
                url: 'language/add_Language',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        addNewCoupon: builder.mutation({
            query: (payload) => ({
                url: 'coupons/add_Coupons',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),


        addNewProduct: builder.mutation({
            query: (payload) => ({
                url: 'product/add_product',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U2NTc5YzQ1NTEwNDQzNDk4MWQ4ZGEiLCJuYW1lIjoiVHVuamkiLCJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwiaXNBZG1pbiI6dHJ1ZSwiaXNTZWxsZXIiOmZhbHNlLCJpc0Jsb2NrZWQiOmZhbHNlLCJpc0FjY291bnRWZXJpZmllZCI6ZmFsc2UsImlhdCI6MTY3NzU1OTU1MCwiZXhwIjoxNjgwMTUxNTUwfQ.UYCx54AJluZkd1YU3S2nOVr5RQzyW1QcGVB7dTEPQ48'
                },
            }),
        }),

        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `product/${id}`,
                method: 'DELETE',
            }),
        }),

        deleteSize: builder.mutation({
            query: (id) => ({
                url: `size/${id}`,
                method: 'DELETE',
            }),
        }),

        deleteBrand: builder.mutation({
            query: (id) => ({
                url: `brand/${id}`,
                method: 'DELETE',
            }),
        }),

        deleteCategory: builder.mutation({
            query: (id) => ({
                url: `category/${id}`,
                method: 'DELETE',
            }),
        }),

        deleteCustomer: builder.mutation({
            query: (id) => ({
                url: `customer/delete_Customer/${id}`,
                method: 'DELETE',
            }),
        }),

        deleteCurrency: builder.mutation({
            query: (id) => ({
                url: `currency/delete_Currency/${id}`,
                method: 'DELETE',
            }),
        }),

        deleteLanguage: builder.mutation({
            query: (id) => ({
                url: `language/delete_Language/${id}`,
                method: 'DELETE',
            }),
        }),

        deleteSupportTicket: builder.mutation({
            query: (id) => ({
                url: `ticketList/delete_Tickets/${id}`,
                method: 'DELETE',
            }),
        }),

        deleteCoupon: builder.mutation({
            query: (id) => ({
                url: `coupons/delete_Coupons/${id}`,
                method: 'DELETE',
            }),
        }),

        getPlaceById: builder.query({
            query: (id) => ({
                url: `brand/${id}`,
                method: 'GET'
            })
        }),


        getSellerProduct: builder.query({
            query: (id) => ({
                url: 'seller_product',
                method: 'GET'
            })
        }),
        addPaymentGet: builder.mutation({
            query: (payload) => ({
                url: 'paymentGate/add_PaymentGates',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),


        addPages: builder.mutation({
            query: (payload) => ({
                url: 'pages/add_Pages',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        getOrderDetail: builder.query({
            query: (id) => ({
                url: `order/getOrderById/${id}`,
                method: 'GET',
            })
        }),


        addOrderConfigs: builder.mutation({
            query: (payload) => ({
                url: 'orderConfig/add_OrderConfigs',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),


        }),

        deletePageList: builder.mutation({
            query: (id) => ({
                url: `pages/delete_Pages/${id}`,
                method: 'DELETE',
               
            })
        }),

        editPageList: builder.mutation({
            query: (id , data) => ({
                url: `pages/update_Pages/${id}`,
                method: 'PUT',
                body: data
            })
        }),

        editCurrency: builder.mutation({
            query: (payload) => ({
                url: `currency/update_Currency/${payload.id}`,
                method: 'PUT',
                body: payload.data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        editCoupon: builder.mutation({
            query: (payload) => ({
                url: `coupons/update_Coupons/${payload.id}`,
                method: 'PUT',
                body: payload.data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        editLanguage: builder.mutation({
            query: (payload, id) => ({
                // url: `coupons/update_ Coupons/${id}`,
                method: 'PUT',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),


    })
})
export const { useGetAllProductsQuery, useGetCategoriesQuery, useGetBrandsQuery, useGetSizesQuery, useAddNewSizeMutation, useAddNewBrandMutation, useAddNewCategoryMutation, useAddNewProductMutation, useGetBannerQuery, useDeleteProductMutation, useDeleteSizeMutation, useDeleteBrandMutation, useDeleteCategoryMutation, useGetPlaceByIdQuery, useGetPickupPointQuery, useGetCustomersQuery, useGetSellersQuery, useGetTicketListsQuery, useGetLanguagesQuery, useAddPickUpPointMutation, useGetPagesQuery, useDeleteCustomerMutation, useGetCurrencyQuery, useGetOrdersQuery, useAddNewCurrencyMutation, useGetCouponsQuery, useDeleteCurrencyMutation, useDeleteLanguageMutation, useDeleteSupportTicketMutation, useDeleteCouponMutation, useAddNewLanguageMutation, useAddNewCouponMutation, useEditCurrencyMutation, useGetCurrencyByIdQuery, useGetCouponByIdQuery, useEditCouponMutation, useGetSellerProductQuery, useAddPaymentGetMutation, useGetOrderDetailQuery, useAddOrderConfigsMutation, useAddPagesMutation  ,useDeletePageListMutation ,useEditPageListMutation} = productsApi