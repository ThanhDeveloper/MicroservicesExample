namespace Project.Core.Entities
{
    public class Order: BaseEntity
    {
        public string CustomerName { set; get; }
        public string Phone { set; get; }
        public string ProductName { set; get; }
        public string Price { set; get; }
        public string Location { set; get; }
        public string Area { set; get; }
    }
}
