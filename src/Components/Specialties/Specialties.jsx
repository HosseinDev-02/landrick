import ProgressBar from "../ProgressBar/ProgressBar";

export default function Specialties() {
    return (
        <section className='mt-[100px] translate-y-10'>
            <div className="container">
                <div className='bg-primary bg-gradient-to-b from-white/15 to-white/0 rounded-md p-6 grid grid-cols-1 md:grid-cols-2 gap-5 shadow-sm shadow-sub-title/15'>
                    <ProgressBar
                        title='طراحی وب'
                        percent={79}
                    />
                    <ProgressBar
                        title='توسعه وب'
                        percent={60}
                    />
                    <ProgressBar
                        title='بازی سازی'
                        percent={88}
                    />
                    <ProgressBar
                        title='توسعه کامل پشته'
                        percent={85}
                    />
                    <ProgressBar
                        title='دیجیتال مارکتینگ'
                        percent={68}
                    />
                    <ProgressBar
                        title='توسعه اپ'
                        percent={56}
                    />
                </div>
            </div>
        </section>
    )
}