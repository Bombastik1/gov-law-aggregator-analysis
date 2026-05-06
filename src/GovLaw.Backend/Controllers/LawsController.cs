using Microsoft.AspNetCore.Mvc;
using GovLaw.Backend.Models;

namespace GovLaw.Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LawsController : ControllerBase
    {
        // Імітація бази даних для демонстрації
        private static readonly List<LawAct> _laws = new()
        {
            new LawAct { Id = Guid.NewGuid(), Title = "Конституція України", Category = "Закон" }
        };

        [HttpGet]
        public IEnumerable<LawAct> GetAll() => _laws;

        [HttpGet("{id}")]
        public ActionResult<LawAct> GetById(Guid id)
        {
            var law = _laws.FirstOrDefault(x => x.Id == id);
            return law == null ? NotFound() : Ok(law);
        }
    }
}
