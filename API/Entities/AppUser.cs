namespace API.Entities;

public class AppUser
{
    public int Id { get; set; } //entityFramework nuk mund te perdoret per atributet me akses tjeter perveq public
    public required string UserName { get; set; }  // shenja ? tregon se eshte opsionale mund te mos e shenojme 
}