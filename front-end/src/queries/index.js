import { gql } from "@apollo/client";

const INFO_PERSON = gql`
  query GetRates {
    rates(currency: "USD") {
      currency
    }
  }
`;

const INFO_ALL_STORE = gql`
  query {
    me {
      name
    }
  }
`;

const ORDERED_EACH_STORE = gql`
  query($storeCustomerId: Int, $first: Int, $offset: Int) {
    getConsolidatedOrders(storeCustomerId: $storeCustomerId, first:
      $first, offset: $offset){
        consolidatedOrderId
        createdAt
        updatedAt
        deletedAt
        expirationDate
        price
        installments
        status
        expectedDeliveryTerm
        discountCouponText
        discountCouponPercentage
        storeCustomerId
        storeCustomerName
        storeCustomerLastName
        storeCustomerEmail
        deliveryStatus
        storeCustomerMobilePhoneNumber
        storeCustomerDocumentNumber
        storeCustomerBirthDate
        storeCustomerStreet
        storeCustomerNumber
        storeCustomerPostalCode
        storeCustomerDetails
        storeCustomerNeighborhood
        storeCustomerCity
        storeCustomerState
        storeCustomerCountry
        paymentMethod
        products {
        productName
        productCode
        variationName
        variationDescription
        firstPictureUrl
        unitPrice
        quantity
      }
        freight {
          name
          price
          selected
        }
    }
  }
`;


export {
 INFO_PERSON,
 INFO_ALL_STORE,
 ORDERED_EACH_STORE
};
