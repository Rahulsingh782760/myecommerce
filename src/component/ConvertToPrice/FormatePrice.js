
const FormatePrice = ({ price }) => {
     
      return Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            
        }).format(price)
    
};

export default FormatePrice;