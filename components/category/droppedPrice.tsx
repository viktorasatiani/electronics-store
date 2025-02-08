function DroppedPrice() {
  return (
    <div className="flex space-x-2">
      {" "}
      {/* Added spacing between price spans */}
      <span className="text-gray-500 line-through">$85.00</span>{" "}
      {/* Added styling for original price */}
      <span className="text-red-500">$70.00</span>{" "}
      {/* Added styling for discounted price */}
    </div>
  );
}

export default DroppedPrice;
