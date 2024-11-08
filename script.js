const events = [
  { id: 1, name: "Summer Party – 15:00 7th July 2023" },
  { id: 2, name: "Christmas Party – 19:00 18th Dec 2023" },
  { id: 3, name: "Half Marathon – 13:00 15th Sept 2024" },
  { id: 4, name: "Halloween Party – 15:00 31st Oct 2024" },
  { id: 5, name: "Stingers Party – 18:00 18th Dec 2024" },
  { id: 6, name: "Prayer Marathon – 13:00 10th Nov 2024" },
  { id: 7, name: "Charity Gala – 20:00 1st Mar 2025" },
  { id: 8, name: "Spring Fling – 16:00 10th Apr 2025" },
  { id: 9, name: "Corporate Retreat – 09:00 22nd Jun 2025" },
  { id: 10, name: "New Year Bash – 21:00 31st Dec 2025" },
  { id: 11, name: "Team Building – 08:00 13th Jan 2025" },
  { id: 12, name: "Mountain Trek – 07:00 12th Feb 2025" },
  { id: 13, name: "Wine Tasting – 17:00 20th May 2025" },
  { id: 14, name: "Cooking Class – 11:00 8th Jun 2025" },
  { id: 15, name: "Art Workshop – 10:00 14th Jul 2025" },
  { id: 16, name: "End of Summer BBQ – 15:00 25th Aug 2025" },
  { id: 17, name: "Charity Run – 09:00 4th Oct 2025" },
  { id: 18, name: "Tech Conference – 09:00 15th Nov 2025" },
  { id: 19, name: "Book Club Meet – 18:00 3rd Dec 2025" },
  { id: 20, name: "Thanksgiving Dinner – 18:30 28th Nov 2025" },
  { id: 21, name: "Yoga Retreat – 08:00 16th Jan 2026" },
  { id: 22, name: "Spring Picnic – 11:00 5th Mar 2026" },
  { id: 23, name: "Photography Class – 10:00 2nd Apr 2026" },
  { id: 24, name: "Startup Pitch Night – 18:00 12th May 2026" },
  { id: 25, name: "Music Festival – 13:00 17th Jun 2026" },
  { id: 26, name: "Beach Volleyball – 14:00 29th Jul 2026" },
  { id: 27, name: "Back to School Fair – 10:00 15th Aug 2026" },
  { id: 28, name: "Oktoberfest Celebration – 18:00 1st Oct 2026" },
  { id: 29, name: "Cycling Marathon – 07:00 11th Nov 2026" },
  { id: 30, name: "Holiday Gala – 20:00 23rd Dec 2026" },
  { id: 31, name: "Valentine’s Party – 18:00 14th Feb 2026" },
  { id: 32, name: "Summer Solstice Party – 16:00 21st Jun 2026" },
  { id: 33, name: "Innovation Summit – 09:00 15th Jul 2026" },
  { id: 34, name: "Coding Bootcamp – 10:00 23rd Aug 2026" },
  { id: 35, name: "Community Cleanup – 09:00 4th Sept 2026" },
  { id: 36, name: "Winter Wonderland – 18:00 2nd Dec 2026" },
  { id: 37, name: "Volunteer Day – 10:00 6th Jan 2027" },
  { id: 38, name: "Film Festival – 19:00 18th Feb 2027" },
  { id: 39, name: "Gaming Tournament – 12:00 23rd Mar 2027" },
  { id: 40, name: "Sports Day – 08:00 10th Apr 2027" },
  { id: 41, name: "Science Fair – 09:00 7th May 2027" },
  { id: 42, name: "Culinary Festival – 11:00 24th Jun 2027" },
  { id: 43, name: "Jazz Night – 19:00 1st Jul 2027" },
  { id: 44, name: "Meditation Workshop – 09:00 11th Aug 2027" },
  { id: 45, name: "Stand-Up Comedy – 18:00 3rd Sept 2027" },
  { id: 46, name: "Dance Marathon – 13:00 28th Oct 2027" },
  { id: 47, name: "Charity Auction – 19:00 16th Nov 2027" },
  { id: 48, name: "Annual Awards – 20:00 1st Dec 2027" },
  { id: 49, name: "New Year Party – 21:00 31st Dec 2027" },
  { id: 50, name: "Ice Skating Event – 15:00 13th Jan 2028" },
  { id: 51, name: "Easter Egg Hunt – 11:00 9th Apr 2028" },
  { id: 52, name: "Environment Day – 10:00 5th Jun 2028" },
  { id: 53, name: "Chess Tournament – 12:00 21st Jul 2028" },
  { id: 54, name: "Marathon – 07:00 13th Oct 2028" },
  { id: 55, name: "Food Festival – 11:00 6th Nov 2028" },
  { id: 56, name: "Networking Brunch – 10:00 12th Mar 2029" },
  { id: 57, name: "Paint and Sip – 17:00 25th Feb 2029" },
  { id: 58, name: "Fashion Show – 19:00 9th Jun 2029" },
  { id: 59, name: "Potluck Picnic – 12:00 19th May 2029" },
  { id: 60, name: "Open Mic Night – 18:00 7th Aug 2029" },
  { id: 61, name: "Beach Bonfire – 17:00 20th Sept 2029" },
  { id: 62, name: "Orchestra Night – 20:00 5th Dec 2029" },
  { id: 63, name: "Team Offsite – 09:00 18th Mar 2030" },
  { id: 64, name: "Charity Bike Ride – 08:00 4th Apr 2030" },
  { id: 65, name: "Trivia Night – 18:00 12th Jun 2030" },
  { id: 66, name: "Tech Expo – 10:00 23rd Jul 2030" },
  { id: 67, name: "Science Workshop – 11:00 15th Oct 2030" },
  { id: 68, name: "Christmas Caroling – 18:00 19th Dec 2030" },
  { id: 69, name: "Art Gala – 19:00 29th Jan 2031" },
  { id: 70, name: "Health Fair – 10:00 6th Feb 2031" },
  { id: 71, name: "Startup Meetup – 16:00 24th Mar 2031" },
  { id: 72, name: "Spring Craft Fair – 10:00 5th Apr 2031" },
  { id: 73, name: "Open House – 14:00 18th May 2031" },
  { id: 74, name: "Annual Concert – 19:00 13th Jun 2031" },
  { id: 75, name: "Sustainability Conference – 09:00 2nd Sept 2031" },
  { id: 76, name: "Holiday Parade – 17:00 25th Nov 2031" },
  { id: 77, name: "Soccer Match – 10:00 9th Oct 2031" },
  { id: 78, name: "Reading Marathon – 08:00 20th Feb 2032" },
  { id: 79, name: "Wine and Cheese Night – 17:00 14th Apr 2032" },
  { id: 80, name: "Book Swap – 11:00 28th Jun 2032" },
  { id: 81, name: "Film Screening – 19:00 12th Jul 2032" },
  { id: 82, name: "Animal Shelter Drive – 09:00 23rd Sept 2032" },
  { id: 83, name: "Nature Walk – 07:00 15th Oct 2032" },
  { id: 84, name: "Lantern Festival – 18:00 31st Dec 2032" },
  { id: 85, name: "Gardening Workshop – 09:00 21st Mar 2033" },
  { id: 86, name: "Kids Art Workshop – 11:00 16th Apr 2033" },
  { id: 87, name: "Dance Class – 17:00 27th May 2033" },
  { id: 88, name: "Fishing Tournament – 06:00 7th Jun 2033" },
  { id: 89, name: "Wine Festival – 15:00 29th Aug 2033" },
  { id: 90, name: "Beach Cleanup – 08:00 19th Sept 2033" },
  { id: 91, name: "Community Potluck – 12:00 10th Nov 2033" },
  { id: 92, name: "Winter Camp – 09:00 5th Dec 2033" },
  { id: 93, name: "Soapmaking Workshop – 13:00 11th Feb 2034" },
  { id: 94, name: "Karaoke Night – 18:00 4th Apr 2034" },
  { id: 95, name: "Yoga Festival – 08:00 13th Jul 2034" },
  { id: 96, name: "Mountain Biking – 10:00 7th Sept 2034" },
  { id: 97, name: "Film Festival – 19:00 2nd Dec 2034" },
  { id: 98, name: "Ice Cream Social – 14:00 20th Aug 2034" },
  { id: 99, name: "Forest Hike – 06:00 30th Oct 2034" },
  { id: 100, name: "Pancake Breakfast – 09:00 16th Mar 2035" },
  { id: 101, name: "Rock Climbing Day – 07:00 27th Apr 2035" },
  { id: 102, name: "Sailing Trip – 08:00 15th Jun 2035" },
  { id: 103, name: "Camping Night – 17:00 24th Jul 2035" },
  { id: 104, name: "Storytelling Evening – 18:00 2nd Aug 2035" },
  { id: 105, name: "Paintball Challenge – 09:00 7th Oct 2035" },
  { id: 106, name: "Halloween Bash – 18:00 31st Oct 2035" },
  { id: 107, name: "Garden Party – 15:00 14th Jun 2035" },
  { id: 108, name: "Open Mic Comedy – 19:00 25th Sept 2035" },
  { id: 109, name: "Opera Night – 20:00 20th Nov 2035" },
  { id: 110, name: "New Year Gala – 20:00 31st Dec 2035" },
];

let selectedEvents = new Set();

function toggleDropdown() {
  const menu = document.getElementById("dropdownMenu");
  menu.style.display = menu.style.display === "none" ? "flex" : "none";
  document.querySelector(".dropdown-header").classList.toggle("active");
}

function updateSelectedCount() {
  document.getElementById("selectedCount").textContent = selectedEvents.size;
  document.querySelector(".selected-count").style.display = selectedEvents.size
    ? "flex"
    : "none";
  document.getElementById("selectAll").checked =
    selectedEvents.size === events.length;
}

function filterEvents() {
  const filter = document.getElementById("searchInput").value.toLowerCase();
  renderEvents(filter);
}

function selectAllEvents(selectAllCheckbox) {
  selectedEvents = new Set(
    selectAllCheckbox.checked ? events.map((event) => event.id) : []
  );
  renderEvents();
  updateSelectedCount();
}

function createEventLabel(event) {
  const label = document.createElement("label");
  label.classList.toggle("highlight", selectedEvents.has(event.id));
  const input = document.createElement("input");
  input.type = "checkbox";
  input.value = event.id;
  input.id = event.id;
  input.checked = selectedEvents.has(event.id);
  input.onclick = (e) => {
    e.stopPropagation();
    if (input.checked) selectedEvents.add(event.id);
    else selectedEvents.delete(event.id);
    renderEvents();
    updateSelectedCount();
  };
  label.appendChild(input);
  label.appendChild(document.createTextNode(event.name));
  return label;
}

function renderEvents(filter = "") {
  const eventList = document.getElementById("eventList");
  eventList.innerHTML = "";
  const noResults = document.getElementById("noResultsMessage");
  const selectAllLabel = document.querySelector(".select-all");

  const selected = Array.from(selectedEvents)
    .map((id) => events.find((event) => event.id === id))
    .filter((event) => event.name.toLowerCase().includes(filter));

  selected.forEach((event) => eventList.appendChild(createEventLabel(event)));

  if (selected.length > 0) {
    const divider = document.createElement("div");
    divider.classList.add("divider", "event-divider");
    eventList.appendChild(divider);
  }

  if (selectedEvents.size === events.length) {
    document.querySelector(".event-divider").style.display = "none";
  }

  const filteredEvents = events.filter(
    (event) =>
      !selectedEvents.has(event.id) && event.name.toLowerCase().includes(filter)
  );

  filteredEvents.forEach((event) =>
    eventList.appendChild(createEventLabel(event))
  );

  if (selected.length === 0 && filteredEvents.length === 0) {
    selectAllLabel.style.display = "none";
    noResults.style.display = "block";
  } else {
    noResults.style.display = "none";
    selectAllLabel.style.display = "flex";
  }
}

function clearSelections(e) {
  e.stopPropagation();
  selectedEvents.clear();
  document.getElementById("selectAll").checked = false;
  renderEvents();
  updateSelectedCount();
}

function submitForm() {
  const selectedIds = Array.from(selectedEvents).join(",");
  console.log("Selected Event IDs:", selectedIds);
  alert("Submitted Event IDs: " + selectedIds);
}

document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown-container")) {
    document.getElementById("dropdownMenu").style.display = "none";
    document.querySelector(".dropdown-header").classList.remove("active");
  }
});

renderEvents();
