using AutoMapper;
using BackEnd.DTO;
using BackEnd.Models;

namespace BackEnd.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles ()
        {
            CreateMap<UserForRegisterDTO, User>();
            
        }

    }
}