namespace Project.Core.DTOs.Order
{
    public class OrderDto : BaseDto
    {
        public string CustomerName { set; get; }
        public string Phone { set; get; }
        public string ProductName { set; get; }
        public string Price { set; get; }
        public string Location { set; get; }
        public string Area { set; get; }
    }
}
