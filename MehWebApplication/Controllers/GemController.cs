using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MehWebApplication.data;

namespace MehWebApplication.Controllers
{
    public class GemController : ApiController
    {

        NoobDBEntitiesNew db = new NoobDBEntitiesNew();
        // GET: api/Gem
        //public IEnumerable<Gem> Get()
        //{

        //    return db.Gems;
        //}

        public HttpResponseMessage Get()
        {
            return Request.CreateResponse<IEnumerable<Gem>>(HttpStatusCode.Found, db.Gems);
        }

        // GET: api/Gem/5
        public HttpResponseMessage GetById([FromUri]string id)
        {
            IQueryable<Gem> gems = db.Gems.Where(g => g.Name.Contains(id));
            return Request.CreateResponse<IQueryable<Gem>>(HttpStatusCode.Found, gems);
                //from d in db.Gems
                //   where d.Name == name
                //   select d;
        }

        // POST: api/Gem
        public HttpResponseMessage Post([FromBody]Gem g)
        {
            HttpResponseMessage response;
            
            if(g != null && db.Set<Gem>().Local.Any(e => e.Name == g.Name))
            {
                db.Gems.Add(g);
                db.SaveChanges();
                response = Request.CreateResponse<Gem>(HttpStatusCode.Created, g);
            }
            else
            {
                response = Request.CreateResponse<Gem>(HttpStatusCode.ExpectationFailed, g);
            }
            return response;
        }

        // PUT: api/Gem/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Gem/5
        public void Delete(int id)
        {
        }
    }
}
