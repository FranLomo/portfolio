import MenuBar from "@/components/MenuBar";
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex h-100%">
      <MenuBar></MenuBar>
      <div className="w-0 h-full sm:w-2/5 sm:h-0 fixed overflow-hidden">
        <Image
          src="/portfolio/images/yo.jpg"
          layout="fill"
          objectFit="cover"
          alt=""
        />
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, transparent 20%, rgba(0,0,0,0.8) 100%)',
          }}
        />
      </div>
      <div className="w-0 sm:w-2/5 h-full relative"></div>
      
      <div className="sm:w-3/5 w-full px-20 text-balance font-medium">
        <strong><h1 className="pt-80 text-5xl bg-gradient-to-r from-purple-700 to-purple-400 text-transparent bg-clip-text" id="landing">Francisco Lomo</h1></strong>
        <p className="font-semibol mt-5 pb-64">Soy un estudiante de <a className="text-purple-400">Ingeniería Informática</a>, especializado en el <a className="text-purple-400">Desarrollo de Software</a>. Mis intereses principales son el desarrollo de <a className="text-purple-400">aplicaciones de escritorio</a>, el diseño y desarollo de <a className="text-purple-400">aplicaciones web</a> (frontend y backend) y la <a className="text-purple-400">ciberseguridad</a>.</p>
        <strong><h1 className="pt-80 text-5xl bg-gradient-to-r from-purple-700 to-purple-400 text-transparent bg-clip-text" id="about">About</h1></strong>
        <p className="font-semibol mt-5 pb-64">Nací en <a className="text-purple-400">Extremadura</a> pero actualmente resido en <a className="text-purple-400">Valladolid</a>. Desde pequeño me ha picado el <a className="text-purple-400">hambre de aprender</a> y empecé pronto con el mundo de la <a className="text-purple-400">Tecnología</a> y la <a className="text-purple-400">Informática</a> con un antigüo ordenador de mi padre. Soy bueno trabajando en  <a className="text-purple-400">equipo</a> pero también considero que tengo capacidades útiles de <a className="text-purple-400">organización, dirección y liderazgo.</a></p>
        <strong><h1 className="pt-80 text-5xl bg-gradient-to-r from-purple-700 to-purple-400 text-transparent bg-clip-text" id="skills">Skills</h1></strong>
        <div className="font-semibold mt-5 pb-48">
          <ul className="list-disc list-inside space-y-3">
            <li>Manejo fluido de lenguajes estándar como Java, C, Python, HTML, CSS...</li>
            <li>Amplios conocimientos sobre diseño y modelado de aplicaciones utilizando herramientas UML y distintos patrones de diseño para conseguir la solución que mejor se ajuste a los requisitos.</li>
            <li>Conocimientos básicos sobre ciberseguridad, adquiridos de forma autodidacta gracias a materiales online y también a la participación en distintos CTFs.</li>
            <li>Capacidad para adaptarme rápidamente a nuevos lenguajes o frameworks entendiendo su funcionamiento y características como un sistema.</li>
            <li>Manejo fluido del inglés.</li>
          </ul>
        </div>
        <strong><h1 className="pt-72 text-5xl bg-gradient-to-r from-purple-700 to-purple-400 text-transparent bg-clip-text" id="contacto">Contacto</h1></strong>
        <div className="flex mt-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          <a className="ml-3 mt-0.5 text-lg">franciscolomo140103@gmail.com</a>
        </div>
        <div className="flex mt-5 pb-96">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="30" height="30" viewBox="0 0 192 192">
            {
            <g fill="none" fill-rule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
            <path d="M0,192v-192h192v192z" fill="none"></path>
            <g fill="#ffffff"><g id="surface1">
            <path d="M156,0h-120c-19.875,0 -36,16.125 -36,36v120c0,19.875 16.125,36 36,36h120c19.875,0 36,-16.125 36,-36v-120c0,-19.875 -16.125,-36 -36,-36zM59.36539,162.98077h-29.82693l-0.17307,-89.30769h29.82692zM43.70192,61.99038h-0.17308c-9.75,0 -16.03846,-6.72115 -16.03846,-15.08653c0,-8.56731 6.49039,-15.0577 16.41347,-15.0577c9.92308,0 16.00961,6.49038 16.21153,15.0577c0,8.36538 -6.31731,15.08653 -16.41346,15.08653zM162.77885,162.98077h-30.08654v-48.51923c0,-11.74039 -3.11538,-19.73077 -13.61538,-19.73077c-8.01923,0 -12.34615,5.39423 -14.42308,10.61538c-0.77885,1.875 -0.98077,4.44231 -0.98077,7.06731v50.56731h-30.23077l-0.17308,-89.30769h30.23077l0.17308,12.60577c3.86538,-5.97116 10.29808,-14.42308 25.70192,-14.42308c19.09616,0 33.37501,12.46154 33.37501,39.25961v51.86539z"></path>
            </g>
            </g>
            </g>
            }
          </svg>
          <a className="ml-3 mt-0.5 text-lg" href="https://www.linkedin.com/in/francisco-lomo-asenjo-303345316/">Francisco Lomo Asenjo</a>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.3} stroke="currentColor" className="mt-3 size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
          </svg>

        </div>
        <p className="pt-20"></p>
      </div>
    </main>
  );
}
