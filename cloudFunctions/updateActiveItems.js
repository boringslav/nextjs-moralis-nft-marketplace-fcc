//Create a new table called "Active Item"
//Add items when they are listed on the marketplace
//Remove them when they are bought or cancelled

Moralis.Cloud.afterSave("ItemListed", async (request) => {
    //Every event gets triggered twice, once on unconfirmed, again on confirmed
    const confirmed = request.object.get("confirmed")
    const logger = Moralis.Cloud.getLogger()
    logger.info("Looking for confirmed Tx")
})
