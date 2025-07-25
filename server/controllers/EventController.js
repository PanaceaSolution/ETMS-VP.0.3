import prisma from "../config/db.js";

export const addEvent = async (req, res) => {
  const {
    organizerName,
    locationId,
    name,
    description,
    eventDate,
    eventTime,
    doorOpeningTime,
    baseTicketPrice,
    eventPhoto,
    termsAndConditions,
    status,
  } = req.body;

  if (
    !organizerName ||
    !locationId ||
    !name ||
    !description ||
    !eventDate ||
    !eventTime ||
    !doorOpeningTime ||
    !baseTicketPrice ||
    !eventPhoto ||
    !termsAndConditions ||
    !status
  ) {
    return res.status(400).json({
      message: "Please provide all the required field",
    });
  }
  const newEvent = await prisma.event.create({
    data: {
      organizerName,
      locationId,
      name,
      description,
      eventDate,
      eventTime,
      doorOpeningTime,
      baseTicketPrice,
      eventPhoto,
      termsAndConditions,
      status,
    },
  });
  return res.status(200).json({
    message: "Event created successfully",
    data: newEvent,
  });
};

export const getAllEvent = async (req, res) => {
  const allEvent = await prisma.event.findMany();
  if (allEvent.length == 0) {
    return res.status(404).json({
      message: "No event found",
    });
  }
  res.status(200).json({
    message: "Event fetched successfully",
    data: allEvent,
  });
};

export const getSingleEvent = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      message: "please provide id",
    });
  }
  const foundEvent = await prisma.event.findMany({
    where: {
      id,
    },
  });
  if (foundEvent.length === 0) {
    return res.status(404).json({
      message: "No event found with that Id",
    });
  }
  res.status(200).json({
    message: "Event fetched successfully",
    data: foundEvent,
  });
};
