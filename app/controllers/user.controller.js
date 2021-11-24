exports.allAccess = (req, res) => {
    res.status(200).send("Public page");
}

exports.userBoard = (req, res) => {
    res.status(200).send("User page");
}

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin page");
}

exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator page");
}