export default function MTA() {
  return (
    <section>
      <article>
        <picture>
          <img className="w-100" src="/mta-banner.png"></img>
          <figcaption>
            <section className='bg-dark text-white'>
              <article className="container py-4">
                <p>Multi Theft Auto: San Andreas (MTA:SA) is an open-source multiplayer modification for Grand Theft Auto: San Andreas that transforms the classic single-player game into a fully customizable online experience. Unlike a standard mod, MTA provides its own powerful scripting engine (using Lua) and networking framework, allowing players and developers to create entirely new game modes, missions, UIs, and even physics systems.</p>
              </article>
            </section>
          </figcaption>
        </picture>
      </article>
      <article className='container py-4'>
        <p>During my time in the MTA community, I moved beyond playing and began developing custom resources — self-contained scripts that added new mechanics, user interfaces, and server features. One of my most exciting contributions was participating in the creation of a Resident Evil–themed gamemode-based server, where I helped design survival mechanics, scripted custom zombie AI behavior, integrated inventory systems, and balanced player progression for both challenge and fun.</p>
      </article>
      <article className='bg-dark text-white d-flex justify-content-center'>
        <figure className="container w-100 m-0">
          <img className="w-100" src="/mta/captures/capture-1.png"></img>
            <figcaption className='py-4'>
                  <p>The gamemode began with a custom player login system built through a sleek, in-game panel, ensuring a secure and personalized experience for each player. After successful authentication, players were taken directly to a spawn selection interface, where they could choose from multiple starting locations across the map.</p>
                  <p>Once spawned, players would appear inside designated safe zones — fortified areas where zombies could not enter, providing a secure place to regroup, manage inventory, and strategize with teammates. These safe zones acted as hubs for survival, often containing NPC merchants, supply crates, and notice boards with mission objectives.</p>
                  <p>Outside these safe areas, the world was a hostile environment teeming with custom-scripted zombie AI, each with unique movement patterns, attack behaviors, and sound effects. The gameplay loop encouraged exploration, scavenging, and teamwork. Players could gather weapons, medical supplies, and crafting materials, all tracked through a persistent inventory system tied to their account.</p>
            </figcaption>
        </figure>
      </article>
      <article className="bg-dark text-white d-flex justify-content-center">
          <figure className="row container g-3">
            <picture className="col-12">
              <img className="w-100" src="/mta/captures/capture-3.png" alt="Custom radar interface in MTA gamemode"/>
            </picture>
            <figcaption className="py-4 col-12">
              <p>
                One of the standout features I developed for the gamemode was a <strong>custom radar system</strong>, designed to enhance player navigation and situational awareness in a challenging environment. Unlike the default radar, this system provided dynamic markers for safe zones, vehicle locations, key objectives, and points of interest, giving players immediate visual cues without breaking immersion.
              </p>
              <p>
                The radar was fully <strong>integrated as a resource</strong> in the server, allowing me to control how and when it displayed information. Players could zoom in or out, toggle different layers of markers, and receive alerts for nearby threats, all in real time. The design emphasized clarity and responsiveness, ensuring that the interface remained intuitive even during high-intensity moments.
              </p>
              <p>
                Implementing this feature required careful synchronization between the client and server, efficient rendering of markers, and handling edge cases such as player deaths, teleportation, or entering/exiting vehicles. By building this radar, I not only improved gameplay but also gained deeper experience in <strong>UI design, client-server communication, and real-time data visualization</strong> within a multiplayer environment.
              </p>
            </figcaption>
          </figure>
      </article>
      <article className="bg-dark text-white d-flex justify-content-center">
        <section className="container m-0">
          <figure className="row g-3">
            <picture className="col-12 col-md-6">
              <img className="w-100" src="/mta/captures/capture-4.png" alt="Resident Evil gamemode vehicle shop"/>
            </picture>
            <picture className="col-12 col-md-6">
              <img className="w-100" src="/mta/captures/capture-5.png" alt="Resident Evil gamemode weapon drop system"/>
            </picture>
            <figcaption className="py-4 col-12">
              <p>
                As the gamemode evolved, I began expanding its core features to create a richer and more immersive survival experience. One of the most exciting additions was the <strong>custom vehicle shop</strong> — a fully interactive marketplace where players could browse, purchase, and spawn unique vehicles. Each vehicle was carefully customized with performance tweaks, paint jobs, and accessories, giving players a sense of ownership and individuality in the apocalypse.
              </p>
              <p>
                Vehicles were more than just a way to get around; they became an essential part of survival. Players used them to explore distant locations, transport teammates, or stage daring supply runs into infected territory. Every purchase felt rewarding, and because each vehicle was persistent, players developed their own personal fleet over time.
              </p>
              <p>
                Another key feature I implemented was the ability to <strong>drop and pick up weapons</strong> anywhere in the world. This opened up a new layer of strategy — players could share gear during intense battles, leave backup weapons in safe zones, or even set traps by placing valuable-looking items in dangerous areas. The mechanic was designed with precision to ensure smooth animations, realistic physics, and secure item ownership, all synchronized seamlessly between the client and server.
              </p>
              <p>
                These systems not only deepened the gameplay but also encouraged collaboration, trade, and creative tactics among players, turning every session into a unique and unpredictable story of survival.
              </p>
            </figcaption>
          </figure>
        </section>
      </article>
    </section>
  )
}
