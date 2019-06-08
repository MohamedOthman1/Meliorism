using System.Threading.Tasks;
using BackEnd.Models;

namespace BackEnd.Repositories
{
    public interface IAuthRepository
    {
         Task<User> Register(User user , string password);

         Task<User> Login(string username , string password);

         Task<bool> UserExist(string username);
    }
}