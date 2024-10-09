using System.Reflection.Metadata.Ecma335;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;


[ApiController]
[Route("api/[controller]")] // https://localhost:5001/api/users
public class UsersController(DataContext context) : ControllerBase
{

    [HttpGet]
    public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers(){
        
        var users = await context.Users.ToListAsync();

        return users;
    }


    [HttpGet("{id:int}")] //api/users/id e userit
    public async Task<ActionResult<AppUser>> GetUser(int id){
        var user = await context.Users.FindAsync(id);

        if(user == null) return NotFound(); //shiko se pari a ekziston ai user

        return user;
    }
}
