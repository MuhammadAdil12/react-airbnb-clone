

export default function CardComponent (props){

    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
            <div className="card-1">
                {badgeText && <div className="card--badge">{badgeText}</div>}
                <img src={props.item.coverImg} className="katie-img" />
                {/* <img src={img1} className="katie-img" /> */}
                <div className="card--stats">
                    <span className="rating">{props.item.stats.rating} Stars </span>
                    <span>({props.item.stats.reviewCount}) </span>
                    <span>{props.item.location} </span>
                </div>
                <p>{props.item.title} </p>
                <p><span>From ${props.item.price} </span>/ person</p>
            </div>

    )
}