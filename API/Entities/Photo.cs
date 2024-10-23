using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities;

[Table("Photos")]
public class Photo
{
    public int Id { get; set; }
    public required string Url { get; set; }
    public bool IsMain { get; set; }
    public string? PublicId { get; set; }


    //Navigation properties
    //ktu e bejme lidhjen one to many , pra nje App User munet me pas shum foto, dhe kur fshihet nje user duhet edhe fotot e tij te fshihen ne db
    public int AppUserId { get; set; }
    public AppUser AppUser { get; set; } = null!; 
    
}