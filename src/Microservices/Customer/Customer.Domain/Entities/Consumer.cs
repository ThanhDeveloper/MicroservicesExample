using Customer.Domain.Common;

namespace Customer.Domain.Entities;

public class Consumer : EntityBase
{
    public string UserName { get; set; }
    public string Gender { get; set; }
    public string Country { get; set; }
}