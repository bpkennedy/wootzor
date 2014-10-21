using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MehWebApplication.data;

namespace MehWebApplication.Controllers
{
    public class GemImageController : ApiController
    {

        /// <summary>
        /// Init the Database Context
        /// </summary>
        NoobDBEntitiesNew db = new NoobDBEntitiesNew();

        // GET: api/GemImage
        public IEnumerable<GemImage> Get()
        {
            return db.GemImages;
        }

        // GET: api/GemImage/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/GemImage
        public void Post([FromBody]GemImage img)
        {
            Gem parent = db.Gems.Find(img.Gem);
            if (img.Url == null)
            {
                img.Url = "no URL";
            }
            img.Gem1 = parent;
            db.GemImages.Add(img);
            db.SaveChanges();
        }

        // PUT: api/GemImage/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/GemImage/5
        public void Delete(int id)
        {
        }
    }
}
