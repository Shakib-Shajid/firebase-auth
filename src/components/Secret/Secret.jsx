
const Secret = () => {
    return (
        <div className="text-center m-20 md:m-52 text-xl md:text-3xl">
            <h3 className="rounded-xl p-5 bg-red-600 text-white"> This is private route. Without login, nobody can access it. </h3>
        </div>
    );
};

export default Secret;