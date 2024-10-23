using Microsoft.AspNetCore.Mvc.ModelBinding.Binders;
using Microsoft.VisualBasic;
using API.Extensions;
namespace API.Entities;

public class AppUser
{
    public int Id { get; set; } //entityFramework nuk mund te perdoret per atributet me akses tjeter perveq public
    public required string UserName { get; set; }  // shenja ? tregon se eshte opsionale mund te mos e shenojme 

    public byte[] PasswordHash { get; set; } = [];

    public byte[] PasswordSalt { get; set; } = [];

    public DateOnly DateOfBirth { get; set; }

    public required string KnownAs { get; set; }

    public DateTime Created { get; set;} = DateTime.UtcNow;

    public DateTime LastActive { get; set; } = DateTime.UtcNow;

    public required string Gender { get; set; }
    
    public string? Introduction { get; set; }

    public string? Interests { get; set; }

    public string? LookingFor { get; set; }

    public required string City { get; set; }

    public required string Country { get; set; }

    public List<Photo> Photos { get; set; } = [];

    // public int GetAge(){
    //     return DateOfBirth.CalculateAge(); //metoden calculateAge e thirrim prej klases statike te folderi Extensions
    // }
}