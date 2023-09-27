function SummaryParty({ reference }) {
    return (
        <div className="bg-violet-200 mt-5 p-3 flex-col">
            <div>
                Name: {reference.name}
            </div>
            <div>
                Size: {reference.size}
            </div>
            <div>
                Phone: {reference.phoneNumber}
            </div>
            <div>
                Time: {reference.quotedTime}
            </div>
        </div>
    );
}

export default SummaryParty;