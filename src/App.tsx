import AttachFileIcon from "@mui/icons-material/AttachFile";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Avatar1 from "./assets/Avatar1.png";
import Avatar2 from "./assets/Avatar2.png";
import Avatar3 from "./assets/Avatar3.png";
import AvatarCarlos from "./assets/AvatarCarlos.png";
import Rewards from "./assets/rewards.png";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <div className=" mx-auto max-w-[428px] bg-[#F7F9FB]">
        <Header />
        <main className=" h-[600vh] px-8 pt-5">
          <section id="motivation">
            <h1 className=" mb-2.5 text-xl font-semibold text-[#304985] ">
              ¡Bienvenido, Sam!
            </h1>
            <p className=" font-medium text-[#454545]">
              ¡Hoy será un gran día!
            </p>
            <div className="my-7 flex items-center gap-1.5 rounded-xl bg-[#304985] px-4 py-3">
              <img
                src={Rewards}
                alt="Reward image after completing a challenge"
              />
              <p className="  text-lg font-semibold leading-none text-white ">
                ¡Felicidades!
                <br />{" "}
                <span className=" text-base  font-normal leading-none">
                  Haz completado el onboarding.
                </span>
              </p>
            </div>
          </section>
          <section id="order" className=" mb-8">
            <div className="mb-5 flex items-center justify-between text-[#304985]">
              <h2 className=" leading-1 inline-block text-lg font-semibold leading-tight ">
                Próximos eventos
              </h2>
              <Button
                variant="text"
                className=" py-1 text-sm font-semibold normal-case leading-none tracking-normal text-[#304985] "
              >
                Ver calendario
              </Button>
            </div>
            <div className=" rounded-xl bg-white p-5 shadow-[0_1px_4px_0px_rgba(0,0,0,0.25)]">
              <div className="mb-2.5 flex items-start justify-between">
                <div className="flex gap-4">
                  <div className=" space-y-2 text-right text-sm font-medium leading-tight text-neutral-600 text-opacity-60">
                    <p>Sept</p>
                    <p className="text-lg leading-tight text-[#304985] text-opacity-100 ">
                      14
                    </p>
                    <p>2023</p>
                  </div>
                  <Divider
                    orientation="vertical"
                    variant="fullWidth"
                    className=" h-20 border border-[#304985] border-opacity-20"
                  />
                  <div className=" space-y-2.5 text-sm font-medium leading-tight">
                    <p className=" text-[#797979]">9 am - 5 pm</p>
                    <p className=" text-[#304985]">Interior & Exterior paint</p>
                    <p className=" text-[#454545]">Client: John Doe</p>
                  </div>
                </div>
                <MoreVertIcon className="h-6 w-6 cursor-pointer text-[#304985]" />
              </div>
              <p className="mb-1 text-xs text-[#454545]">Sub contratista/s:</p>
              <div className="flex snap-x snap-mandatory gap-8 overflow-x-scroll pb-2">
                <div className="flex w-fit snap-start items-center gap-1 text-xs">
                  <Avatar
                    alt="Carlos Gonzalez"
                    src={AvatarCarlos}
                    className="h-7 w-7"
                  />
                  <span className=" mr-6 inline-block whitespace-nowrap font-medium text-[#454545]">
                    Carlos Gonzalez
                  </span>
                  <span className="flex gap-0.5 align-middle font-semibold text-[#304985]">
                    4,5 <StarBorderIcon className="h-4 w-4" />
                  </span>
                </div>
                <div className="flex w-fit snap-start items-center gap-1 text-xs">
                  <Avatar
                    alt="Carlos Gonzalez"
                    src={AvatarCarlos}
                    className="h-7 w-7"
                  />
                  <span className=" mr-6 inline-block whitespace-nowrap font-medium text-[#454545]">
                    Carlos Gonzalez
                  </span>
                  <span className="flex gap-0.5 align-middle font-semibold text-[#304985]">
                    4,5 <StarBorderIcon className="h-4 w-4" />
                  </span>
                </div>
                <div className="flex w-fit snap-start items-center gap-1 text-xs">
                  <Avatar
                    alt="Carlos Gonzalez"
                    src={AvatarCarlos}
                    className="h-7 w-7"
                  />
                  <span className=" mr-6 inline-block whitespace-nowrap font-medium text-[#454545]">
                    Carlos Gonzalez
                  </span>
                  <span className="flex gap-0.5 align-middle font-semibold text-[#304985]">
                    4,5 <StarBorderIcon className="h-4 w-4" />
                  </span>
                </div>
                <div className="flex w-fit snap-start items-center gap-1 text-xs">
                  <Avatar
                    alt="Carlos Gonzalez"
                    src={AvatarCarlos}
                    className="h-7 w-7"
                  />
                  <span className=" mr-6 inline-block whitespace-nowrap font-medium text-[#454545]">
                    Carlos Gonzalez
                  </span>
                  <span className="flex gap-0.5 align-middle font-semibold text-[#304985]">
                    4,5 <StarBorderIcon className="h-4 w-4" />
                  </span>
                </div>
                <div className="flex w-fit snap-start items-center gap-1 text-xs">
                  <Avatar
                    alt="Carlos Gonzalez"
                    src={AvatarCarlos}
                    className="h-7 w-7"
                  />
                  <span className=" mr-6 inline-block whitespace-nowrap font-medium text-[#454545]">
                    Carlos Gonzalez
                  </span>
                  <span className="flex gap-0.5 align-middle font-semibold text-[#304985]">
                    4,5 <StarBorderIcon className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <div className="mt-6 flex justify-between">
                <Button
                  variant="text"
                  className='min-w-[150px] rounded-lg bg-[#E6EEFE] p-4  font-["Inter","Helvetica","Arial",sans-serif] text-sm  font-semibold leading-tight text-[#304985]'
                >
                  Cancelar
                </Button>
                <Button
                  variant="contained"
                  className=" rounded-lg bg-[#304985] p-4 leading-tight"
                >
                  Reprogramar
                </Button>
              </div>
            </div>
          </section>
          <section id="growth" className=" mb-8 space-y-4">
            <div className="mb-5 flex items-center justify-between text-[#304985]">
              <h2 className=" leading-1 inline-block text-lg leading-tight ">
                Tareas por completar
              </h2>
              <Button
                variant="text"
                className=" py-1 text-sm font-semibold normal-case leading-none tracking-normal text-[#304985] "
              >
                Ver todas
              </Button>
            </div>
            {/*TAREAS*/}
            <div className="rounded-xl p-4 font-semibold text-[#454545] shadow-[0_1px_4px_0px_rgba(0,0,0,0.25)]">
              <div className="flex justify-between">
                <span className=" text-sm  ">Elegir página web</span>
                <MoreVertIcon className="text-[#304985]" />
              </div>
              <p className=" text-xs leading-6">Vence: septiembre 27, 2023 </p>
              <Chip
                label="Marketing"
                className="mb-2 mt-1 h-auto bg-[#6DEABD] px-2 py-1 text-[10px] text-[#304985] [&>.MuiChip-label]:px-0"
              />
              <div className="flex items-center justify-between">
                <AvatarGroup max={4} className=" w-fit justify-end">
                  <Avatar
                    alt="Remy Sharp"
                    src={Avatar1}
                    className=" border-none"
                  />
                  <Avatar
                    alt="Travis Howard"
                    src={Avatar2}
                    className=" border-none"
                  />
                  <Avatar
                    alt="Cindy Baker"
                    src={Avatar3}
                    className=" border-none"
                  />
                </AvatarGroup>
                <div className="flex gap-1">
                  <ChatBubbleOutlineIcon className=" w-5" />
                  <span>3</span>
                  <AttachFileIcon className=" w-5" />
                  <span>3</span>
                </div>
              </div>
            </div>
            <div className="rounded-xl p-4 font-semibold text-[#454545] shadow-[0_1px_4px_0px_rgba(0,0,0,0.25)]">
              <div className="flex justify-between">
                <span className=" text-sm  ">Elegir página web</span>
                <MoreVertIcon className="text-[#304985]" />
              </div>
              <p className=" text-xs leading-6">Vence: septiembre 27, 2023 </p>
              <Chip
                label="Marketing"
                className="mb-2 mt-1 h-auto bg-[#6DEABD] px-2 py-1 text-[10px] text-[#304985] [&>.MuiChip-label]:px-0"
              />
              <div className="flex items-center justify-between">
                <AvatarGroup max={4} className=" w-fit justify-end">
                  <Avatar
                    alt="Remy Sharp"
                    src={Avatar1}
                    className=" border-none"
                  />
                  <Avatar
                    alt="Travis Howard"
                    src={Avatar2}
                    className=" border-none"
                  />
                  <Avatar
                    alt="Cindy Baker"
                    src={Avatar3}
                    className=" border-none"
                  />
                </AvatarGroup>
                <div className="flex gap-1">
                  <ChatBubbleOutlineIcon className=" w-5" />
                  <span>3</span>
                  <AttachFileIcon className=" w-5" />
                  <span>3</span>
                </div>
              </div>
            </div>
            <div className="rounded-xl p-4 font-semibold text-[#454545] shadow-[0_1px_4px_0px_rgba(0,0,0,0.25)]">
              <div className="flex justify-between">
                <span className=" text-sm  ">Elegir página web</span>
                <MoreVertIcon className="text-[#304985]" />
              </div>
              <p className=" text-xs leading-6">Vence: septiembre 27, 2023 </p>
              <Chip
                label="Marketing"
                className="mb-2 mt-1 h-auto bg-[#6DEABD] px-2 py-1 text-[10px] text-[#304985] [&>.MuiChip-label]:px-0"
              />
              <div className="flex items-center justify-between">
                <AvatarGroup max={4} className=" w-fit justify-end">
                  <Avatar
                    alt="Remy Sharp"
                    src={Avatar1}
                    className=" border-none"
                  />
                  <Avatar
                    alt="Travis Howard"
                    src={Avatar2}
                    className=" border-none"
                  />
                  <Avatar
                    alt="Cindy Baker"
                    src={Avatar3}
                    className=" border-none"
                  />
                </AvatarGroup>
                <div className="flex gap-1">
                  <ChatBubbleOutlineIcon className=" w-5" />
                  <span>3</span>
                  <AttachFileIcon className=" w-5" />
                  <span>3</span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
