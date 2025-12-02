type TitleProps = {
    icon: string;
    titleText: string;
};

function Title({ icon, titleText }: TitleProps) {
    return (
        <section className="title-wrapper">
            <img src={icon} alt="Logo" />
            <h2>{titleText}</h2>
        </section>
    );
}

export default Title;
