import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Phyxio.png';
import './NavbarSidebar.css';

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo-gradient">
        <img
          src={logo}
          alt="Phyxio Logo"
          className="navbar-logo-img"
          style={{ background: 'transparent' }}
        />
      </div>
      <span className="navbar-title">Phyxio Calculator</span>
    </nav>
  );
}

function SidebarSection({ title, icon, isOpen, toggle, children }) {
  return (
    <>
      <div className="sidebar-card" role="button" tabIndex={0} onClick={toggle}>
        <i className={`bi ${icon} sidebar-icon`}></i>
        <span className="sidebar-label">{title}</span>
        <span className="sidebar-label" style={{ marginLeft: 'auto' }}>
          <i
            className={`bi ${isOpen ? 'bi-chevron-down' : 'bi-chevron-right'} sidebar-icon`}
          ></i>
        </span>
      </div>
      {isOpen && <ul>{children}</ul>}
    </>
  );
}

function SidebarItem({ title, icon }) {
  return (
    <li>
      <div className="sidebar-card">
        <i className={`bi ${icon} sidebar-icon`}></i>
        <span className="sidebar-label">{title}</span>
      </div>
    </li>
  );
}

export function Sidebar() {
  const [isWide, setIsWide] = useState(false);
  const [openFisica, setOpenFisica] = useState(true);
  const [openClasica, setOpenClasica] = useState(false);
  const [openMecanica, setOpenMecanica] = useState(false);
  const [openCinematica, setOpenCinematica] = useState(false);
  const [openEstatica, setOpenEstatica] = useState(false);
  const [openModerna, setOpenModerna] = useState(false);

  const sectionIcons = {
    fisica: 'bi-house',
    clasica: 'bi-lightning',
    mecanica: 'bi-gear',
    cinematica: 'bi-stopwatch',
    estatica: 'bi-arrows-move',
    mru: 'bi-arrow-right',
    mruv: 'bi-arrow-up-right',
    mcu: 'bi-arrow-repeat',
    mcua: 'bi-arrow-clockwise',
    mas: 'bi-arrow-left-right',
    mp: 'bi-arrow-bar-right',
    mr: 'bi-arrow-bar-left',
    dinamica: 'bi-arrow-up-right-circle',
    moderna: 'bi-atom',
    relatividad: 'bi-speedometer2',
    cuantica: 'bi-diagram-3',
  };

  return (
    <aside
      className={`sidebar sidebar-flex ${isWide ? 'sidebar-wide' : 'sidebar-narrow'}`}
      tabIndex={0}
      onMouseEnter={() => setIsWide(true)}
      onMouseLeave={() => setIsWide(false)}
    >
      <div className="sidebar-content">
        {/* Física */}
        <Link
          to="/"
          className={`sidebar-card${openFisica ? ' active' : ''}`}
          onClick={() => setOpenFisica((v) => !v)}
        >
          <i className={`bi ${sectionIcons.fisica} sidebar-icon`}></i>
          <span className="sidebar-label">Física</span>
          <span className="sidebar-label" style={{ marginLeft: 'auto' }}>
            <i
              className={`bi ${openFisica ? 'bi-chevron-down' : 'bi-chevron-right'} sidebar-icon`}
            ></i>
          </span>
        </Link>

        {openFisica && (
          <div>
            {/* Clásica */}
            <SidebarSection
              title="Clásica"
              icon={sectionIcons.clasica}
              isOpen={openClasica}
              toggle={() => setOpenClasica((v) => !v)}
            >
              {/* Mecánica */}
              <li>
                <div
                  className="sidebar-card"
                  role="button"
                  tabIndex={0}
                  onClick={() => setOpenMecanica((v) => !v)}
                >
                  <i className={`bi ${sectionIcons.mecanica} sidebar-icon`}></i>
                  <span className="sidebar-label">Mecánica</span>
                  <span className="sidebar-label" style={{ marginLeft: 'auto' }}>
                    <i
                      className={`bi ${
                        openMecanica ? 'bi-chevron-down' : 'bi-chevron-right'
                      } sidebar-icon`}
                    ></i>
                  </span>
                </div>
                {openMecanica && (
                  <ul>
                    <SidebarItem title="MRU" icon={sectionIcons.mru} />
                    <SidebarItem title="MRUV" icon={sectionIcons.mruv} />
                    <SidebarItem title="MCU" icon={sectionIcons.mcu} />
                    <SidebarItem title="MCUA" icon={sectionIcons.mcua} />
                    <SidebarItem title="MAS" icon={sectionIcons.mas} />
                    <SidebarItem title="MP" icon={sectionIcons.mp} />
                    <SidebarItem title="MR" icon={sectionIcons.mr} />
                  </ul>
                )}
              </li>

              {/* Cinemática */}
              <li>
                <div
                  className="sidebar-card"
                  role="button"
                  tabIndex={0}
                  onClick={() => setOpenCinematica((v) => !v)}
                >
                  <i className={`bi ${sectionIcons.cinematica} sidebar-icon`}></i>
                  <span className="sidebar-label">Cinemática</span>
                  <span className="sidebar-label" style={{ marginLeft: 'auto' }}>
                    <i
                      className={`bi ${
                        openCinematica ? 'bi-chevron-down' : 'bi-chevron-right'
                      } sidebar-icon`}
                    ></i>
                  </span>
                </div>
              </li>

              {/* Estática */}
              <li>
                <div
                  className="sidebar-card"
                  role="button"
                  tabIndex={0}
                  onClick={() => setOpenEstatica((v) => !v)}
                >
                  <i className={`bi ${sectionIcons.estatica} sidebar-icon`}></i>
                  <span className="sidebar-label">Estática</span>
                  <span className="sidebar-label" style={{ marginLeft: 'auto' }}>
                    <i
                      className={`bi ${
                        openEstatica ? 'bi-chevron-down' : 'bi-chevron-right'
                      } sidebar-icon`}
                    ></i>
                  </span>
                </div>
              </li>
            </SidebarSection>

            {/* Moderna (ejemplo si lo usas más adelante) */}
            {/* <SidebarSection
              title="Moderna"
              icon={sectionIcons.moderna}
              isOpen={openModerna}
              toggle={() => setOpenModerna((v) => !v)}
            >
              ...
            </SidebarSection> */}
          </div>
        )}
      </div>
      <div className="sidebar-footer-label">
        Phyxio by CCA
      </div>
    </aside>
  );
}