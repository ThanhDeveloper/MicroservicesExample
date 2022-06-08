namespace Customer.Domain.Common;

public abstract class EntityBase
{
    public int Id { get; protected set; }
    public DateTime CreatedDate { get; set; }
    public DateTime UpdateDate { get; set; }
}