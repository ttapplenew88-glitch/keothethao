const guideSections = [
  {
    id: "odds",
    title: "Tỷ lệ cược",
    category: "General",
    image: "page-03-1.png",
    formula: [
      "Decimal: thắng = điểm đặt x (tỷ lệ - 1)",
      "Hồng Kông/CN: thắng = điểm đặt x tỷ lệ",
      "Malay âm: thắng đủ điểm nhập, thua theo vốn bị trừ",
      "US dương: thắng = điểm đặt x tỷ lệ / 100",
    ],
    example: "Đặt 100 điểm @0.95 theo Hồng Kông, vé thắng nhận 95 điểm. Nếu Decimal @1.95, tiền thắng cũng là 100 x (1.95 - 1) = 95 điểm.",
    checklist: ["Xác định kiểu tỉ lệ trước khi tính.", "Tách tiền thắng và tiền vốn khi trả lời khách.", "Tỉ lệ âm Malay/US cần kiểm tra vốn bị trừ."],
    items: [
      "Decimal: tỷ lệ hiển thị bao gồm cả tiền thắng và tiền đặt cược. Tiền thắng = tiền đặt cược x (tỷ lệ - 1).",
      "Hồng Kông / CN: tỷ lệ hiển thị là tỷ lệ thắng cược. Tiền thắng = tiền đặt cược x tỷ lệ.",
      "Malay / Indo: tỷ lệ dương tính như Hồng Kông. Tỷ lệ âm thắng đủ 100% tiền cược, thua theo vốn hệ thống trừ.",
      "US: tỷ lệ dương thắng = tiền cược x tỷ lệ / 100. Tỷ lệ âm thắng = tiền nhập trên vé cược, thua theo vốn quy đổi.",
    ],
  },
  {
    id: "football-list",
    title: "Cược bóng đá",
    category: "Bet types",
    image: "page-08-1.png",
    example: "Khi khách gửi vé bóng đá, trước tiên xác định nhóm cược: kết quả trận, chấp/tài xỉu, tỷ số, bàn thắng, thời gian hay thị trường khác.",
    checklist: ["Đọc đúng thời gian cược: cả trận, hiệp 1, trong trận, hiệp phụ.", "Kiểm tra loại cược có hoàn tiền/hủy vé không.", "Đối chiếu tỷ số hoặc sự kiện đúng phạm vi thị trường."],
    items: [
      "Cược chính: 1X2, Cược Chấp, Cược Trên/Dưới, Cược Tỷ Số, HalfTime/FullTime, Chấp 3 Cửa.",
      "Bàn thắng: Tổng Bàn Thắng, Số Bàn Cách Biệt, Cầu Thủ Ghi Bàn, Đội Ghi Bàn Đầu Tiên / Cuối Cùng, Chẵn Lẻ.",
      "Thời gian: Chấp Đến Phút, Tài Xỉu Đến Phút, Thời Gian Ghi Bàn.",
      "Khác: Phạt Góc, Thẻ Phạt, Thắng Ngược Dòng, Thắng Không Thủng Lưới, Phản Lưới Nhà, Double Chance, Đội Giữ Sạch Lưới, Cược Kết Hợp, Kick Off.",
    ],
  },
  {
    id: "football-terms",
    title: "Bóng đá - Terms",
    category: "Reference",
    image: "page-16-2.png",
    example: "Nếu vé là 'có bàn thắng trong 15 phút', chỉ tính sự kiện trong khoảng thời gian ghi trên vé, không lấy toàn trận.",
    checklist: ["Không nhầm bù giờ với hiệp phụ.", "VAR chỉ là công cụ xác nhận, kết quả chính thức mới dùng để kết toán.", "Phản lưới nhà có thể ảnh hưởng thị trường cầu thủ ghi bàn."],
    items: [
      "90 phút: thời gian thi đấu 2 hiệp, mỗi hiệp 45 phút.",
      "Kick Off: giao bóng. Bù giờ: thời gian cộng thêm do gián đoạn trận đấu.",
      "Hiệp phụ: 2 hiệp, mỗi hiệp 15 phút sau 90 phút. Đá luân lưu: mỗi bên 5 lượt đá nếu chưa phân thắng bại.",
      "Thẻ phạt gồm thẻ vàng và thẻ đỏ. VAR là video assistant referee.",
      "Phạt góc, phạt đền, đá phạt, ném biên, phản lưới nhà là các thuật ngữ quan trọng khi kiểm tra vé.",
    ],
  },
  {
    id: "one-x-two",
    title: "Bóng đá - Cược 1X2",
    category: "Football",
    image: "page-07-1.png",
    formula: ["Nhà thắng: chọn 1", "Hòa: chọn X", "Khách thắng: chọn 2"],
    example: "Everton vs West Ham: khách chọn Everton thắng. Nếu Everton thắng sau thời gian áp dụng của thị trường, vé thắng; nếu hòa hoặc West Ham thắng, vé thua.",
    checklist: ["Xem thị trường là cả trận hay hiệp.", "Không cộng hiệp phụ/luân lưu nếu thị trường chỉ tính 90 phút.", "Với Decimal, tiền thắng không bao gồm vốn khi nói riêng 'thắng'."],
    items: [
      "Khách dự đoán 1 trong 3 kết quả: đội nhà thắng, đội khách thắng, hoặc hai đội hòa.",
      "Nếu lựa chọn đúng kết quả cuối cùng theo thị trường đã đặt, vé cược thắng.",
      "Ví dụ Decimal: đặt Everton thắng tỷ lệ 1.86, đặt 100k, tiền thắng = 100k x (1.86 - 1) = 86k.",
    ],
  },
  {
    id: "handicap",
    title: "Bóng đá - Cược Chấp",
    category: "Football",
    image: "page-08-1.png",
    formula: ["Đội chấp: lấy tỷ số đội đó trừ tỷ lệ chấp.", "Đội được chấp: lấy tỷ số đội đó cộng tỷ lệ chấp.", "So kết quả sau chấp để xác định thắng/thua/hòa."],
    example: "Everton chấp 0.5, thắng thật 2-1. Sau khi trừ 0.5 vẫn hơn West Ham, vé Everton chấp thắng.",
    checklist: ["Tỷ lệ nằm cùng hàng đội nào thì đội đó là đội chấp.", "Cược trong trận tính từ lúc vé được nhận, không tính tỷ số trước đó.", "Nếu kèo là 0.25/0.75/1.25 cần xem phần Split."],
    items: [
      "Đội mạnh hơn chấp đội yếu hơn một con số nhất định. Kết quả vé được xác định sau khi cộng/trừ tỷ lệ chấp.",
      "Cược chấp có thể mở cho thời gian ngắn, hiệp 1, cả trận, hiệp phụ hoặc đá luân lưu.",
      "Cược chấp trong trận tính từ thời điểm vé được chấp nhận, tỷ số khi đặt cược được hiểu lại là 0-0.",
      "Ví dụ: Everton chấp 0.5 @0.98, đặt 100k. Everton thắng cách biệt 1 bàn nên vé thắng, tiền thắng = 98k.",
    ],
  },
  {
    id: "split",
    title: "Cược Chấp - Tỷ lệ Split",
    category: "Football",
    image: "page-11-1.png",
    formula: ["0.25 = chia 0 và 0.5", "0.75 = chia 0.5 và 1", "1.25 = chia 1 và 1.5", "1.75 = chia 1.5 và 2"],
    example: "Everton chấp 0.75, đặt 100 điểm, tỷ lệ 0.80. Vé chia làm 50 điểm chấp 0.5 và 50 điểm chấp 1. Everton thắng 1 bàn: một nửa thắng, một nửa hòa.",
    checklist: ["Chia điểm đặt thành 2 phần bằng nhau.", "Tính từng nửa vé trước.", "Cộng kết quả hai nửa để ra kết toán cuối."],
    items: [
      "0-0.5 hiển thị 0.25, 0.5-1 hiển thị 0.75, 1-1.5 hiển thị 1.25, 1.5-2 hiển thị 1.75.",
      "Nếu bàn thắng chấp hoặc được chấp cao hơn từ 0.5 trở lên: thắng cả cược.",
      "Nếu thấp hơn từ 0.5: thua cả cược. Nếu bằng nhau: cược hòa.",
      "Nếu nhiều hơn 0.25: thắng nửa cược. Nếu ít hơn 0.25: thua nửa cược.",
    ],
  },
  {
    id: "over-under",
    title: "Bóng đá - Cược Trên/Dưới",
    category: "Football",
    image: "page-12-1.png",
    formula: ["Tài/Trên thắng khi tổng bàn > mốc cược.", "Xỉu/Dưới thắng khi tổng bàn < mốc cược.", "Bằng mốc nguyên như 2, 3, 4 thì hòa hoàn tiền."],
    example: "Cược Dưới 3, trận kết thúc 3-0. Tổng bàn đúng bằng 3 nên vé hòa, trả lại tiền cược.",
    checklist: ["Cộng đúng tổng bàn của phạm vi cược.", "Mốc .25/.75 là split, có thể thắng nửa/thua nửa.", "Không lấy bàn ngoài thời gian thị trường quy định."],
    items: [
      "Cược vào tổng bàn thắng của trận nhiều hơn hoặc ít hơn một con số nhất định.",
      "Tỷ lệ bàn thắng nằm bên trái cột, tỷ lệ thắng cược nằm bên phải.",
      "Ví dụ: Cược Trên 2.5 @0.70 đặt 100k. Trận kết thúc 3-0, tổng bàn thắng là 3 nên cược trên thắng, tiền thắng = 70k.",
      "Ví dụ: Cược Dưới 3 @0.68 đặt 100k. Trận kết thúc 3-0, tổng bàn thắng bằng 3 nên vé hòa, tiền cược được trả về.",
    ],
  },
  {
    id: "correct-score",
    title: "Bóng đá - Tỷ số chính xác",
    category: "Football",
    image: "page-13-1.png",
    example: "Vietnam vs Malaysia, khách đặt Vietnam thắng 3-1. Nếu kết quả đúng 3-1 trong thời gian áp dụng, vé thắng; lệch bất kỳ bên nào là thua.",
    checklist: ["So đúng tỷ số hai đội, không chỉ đội thắng.", "Kiểm tra AOS nếu tỷ số không nằm trong bảng.", "Không tính hiệp phụ/luân lưu nếu thị trường không ghi rõ."],
    items: [
      "Cược đặt vào kết quả chính xác của trận đấu theo bảng tỷ số cho trước.",
      "Không bao gồm tỷ số hiệp phụ và đá luân lưu.",
      "AOS (Any Other Scores): đặt cho các tỷ số khác với tỷ số có sẵn trong bảng cược.",
    ],
  },
  {
    id: "ht-ft",
    title: "Bóng đá - Hiệp/Hết trận",
    category: "Football",
    image: "page-14-1.png",
    formula: ["H = Home/Nhà", "A = Away/Khách", "D hoặc X = Draw/Hòa"],
    example: "Khách chọn H/A: hiệp 1 đội nhà thắng, hết trận đội khách thắng. Chỉ đúng cả hai vế thì vé mới thắng.",
    checklist: ["Ghi riêng kết quả hiệp 1 và cả trận.", "Không được chỉ xem kết quả cuối trận.", "Đối chiếu ký hiệu 1/X/2 với H/D/A."],
    items: [
      "Cược dự đoán kết quả hiệp 1 và cả trận. Khách thắng nếu cả hai mốc ra đúng lựa chọn.",
      "H/H (1/1): hiệp 1 và cả trận nhà thắng. A/A (2/2): hiệp 1 và cả trận khách thắng.",
      "D/D (X/X): hiệp 1 hòa và cả trận hòa. Các tổ hợp H/A, H/D, A/D, A/H, D/H, D/A tính theo ký hiệu tương ứng.",
    ],
  },
  {
    id: "goals",
    title: "Bóng đá - Cược bàn thắng",
    category: "Football",
    image: "page-15-1.png",
    example: "Tổng bàn thắng chọn '3 bàn thắng'. Trận kết thúc đúng tổng 3 bàn thì vé thắng; tổng 2 hoặc 4 đều thua.",
    checklist: ["Xác định thị trường là tổng bàn, cách biệt, cầu thủ hay đội ghi bàn.", "Cầu thủ không thi đấu có thể bị hủy theo luật thị trường.", "Bàn phản lưới nhà thường không tính cho cầu thủ được chọn."],
    items: [
      "Tổng Bàn Thắng: cược tổng số bàn thắng ghi được trong trận.",
      "Số Bàn Cách Biệt: cược đội nhà hoặc đội khách thắng cách biệt chính xác theo hệ số cho trước.",
      "Cầu Thủ Ghi Bàn: cược cầu thủ ghi bàn đầu tiên, cuối cùng hoặc bất kỳ thời gian nào trong trận.",
      "Đội Ghi Bàn Đầu Tiên / Cuối Cùng và Cược Chẵn Lẻ cũng nằm trong nhóm bàn thắng.",
    ],
  },
  {
    id: "time",
    title: "Bóng đá - Cược thời gian",
    category: "Football",
    image: "page-16-1.png",
    example: "Khách cược 'có bàn thắng trong vòng 30 phút'. Chỉ kiểm tra sự kiện trong khoảng thời gian ghi trên vé.",
    checklist: ["Đọc mốc phút trên vé trước khi kết toán.", "Với cược đến phút, chỉ tính dữ liệu đến mốc đó.", "Nếu là live market, xác định thời điểm vé được chấp nhận."],
    items: [
      "Chấp Đến Phút: cược đội mạnh chấp đội yếu theo tỷ lệ cho trước đến một khoảng thời gian nhất định.",
      "Tài Xỉu Đến Phút: cược tổng bàn thắng trên/dưới đến một mốc thời gian.",
      "Thời Gian Ghi Bàn: cược khoảng thời gian ghi bàn đầu tiên hoặc cuối cùng.",
      "Có bàn thắng trong vòng: dự đoán trong khoảng thời gian nhất định có bàn thắng hay không.",
    ],
  },
  {
    id: "fast-market",
    title: "Fast Market - Cá cược nhanh",
    category: "Live",
    image: "page-18-1.png",
    example: "Cược 'Có bàn thắng trong 5 phút tiếp theo'. Nếu bàn thắng xảy ra trong đúng cửa thời gian sau khi vé được nhận, vé Có thắng.",
    checklist: ["Xác định cửa 1 phút hay 5 phút.", "Kiểm tra sự kiện: bàn thắng, góc, thẻ, phạt đền, ném biên, đá phạt, phát bóng.", "Chỉ tính sự kiện sau thời điểm vé được xác nhận."],
    items: [
      "Cá cược nhanh cho phép dự đoán một sự kiện cụ thể có diễn ra trong 1 hoặc 5 phút kế tiếp của trận bóng đá trực tiếp hay không.",
      "Các loại cược gồm bàn thắng, phạt góc, thẻ phạt, phạt đền, ném biên, phạt trực tiếp và phát bóng.",
      "Ví dụ: Có bàn thắng trong 5 phút tiếp theo: Có 1.90, Không 2.05.",
    ],
  },
  {
    id: "other-football",
    title: "Bóng đá - Cược khác",
    category: "Football",
    image: "page-15-3.png",
    example: "Double Chance Home or Draw: đội nhà thắng hoặc hai đội hòa thì vé thắng; đội khách thắng thì vé thua.",
    checklist: ["Đọc tên thị trường trước khi áp công thức.", "Một số thị trường tính theo điểm thẻ/phạt góc, không phải bàn thắng.", "Thị trường dài hạn cần kết quả chính thức của giải."],
    items: [
      "Phạt Góc, Thẻ Phạt, Thắng Ngược Dòng, Thắng Không Thủng Lưới, Phản Lưới Nhà.",
      "Double Chance cho phép chọn hai kết quả trong một vé cược, một trong hai tình huống xảy ra thì vé thắng.",
      "Đội Giữ Sạch Lưới, Hai Đội Ghi Bàn, Kick Off, Extra Time, Đá Luân Lưu, Cược Kết Hợp, To Qualify, Hòa Được Hoàn Tiền.",
      "Các thị trường dài hạn gồm Winner Without, Top GoalScorer, To Be Relegated, To Finish Bottom.",
    ],
  },
  {
    id: "card-markets",
    title: "Bóng đá - Cược thẻ phạt",
    category: "Football",
    formula: ["Thẻ vàng = 1 điểm", "Thẻ đỏ trực tiếp = 2 điểm", "Đỏ do nhận đủ 2 thẻ vàng = 3 điểm tổng cộng"],
    example: "Đội nhà có 2 thẻ vàng riêng lẻ và 1 cầu thủ nhận đỏ do hai vàng: tổng điểm thẻ đội nhà = 2 x 1 + 1 x 3 = 5 điểm.",
    checklist: ["Chỉ nhập thẻ vàng riêng lẻ, không nhập lại các thẻ thuộc tình huống đỏ do hai vàng.", "Đối chiếu thời gian áp dụng của thị trường thẻ.", "Dùng quy định nội bộ này khi kết toán; hệ điểm có thể khác ở hệ thống khác."],
    items: [
      "Cược thẻ phạt được thanh toán theo tổng điểm thẻ của từng đội hoặc toàn trận.",
      "Theo tài liệu nội bộ: thẻ vàng tính 1 điểm, thẻ đỏ tính 2 điểm; cầu thủ nhận thẻ vàng thứ hai dẫn đến thẻ đỏ được tính tổng 3 điểm cho tình huống đó.",
      "Khi tính Tài/Xỉu thẻ phạt, cộng điểm thẻ hai đội rồi so với mốc Tài/Xỉu trên vé.",
    ],
  },
  {
    id: "basketball",
    title: "Cược bóng rổ",
    category: "Basketball",
    image: "basketball-guide.jpg",
    example: "Money Line bóng rổ chỉ cần đội được chọn thắng trận. Spread cần so điểm sau khi cộng/trừ chấp.",
    checklist: ["Xem cược theo cả trận, quarter hay hiệp.", "Hiệp 2 có thể bao gồm hiệp phụ theo guide.", "Tổng điểm đội khác với tổng điểm cả trận."],
    items: [
      "Money Line: dự đoán đội chiến thắng. Cược Chấp Spread: dự đoán đội thắng theo hệ số chấp.",
      "Trên/Dưới: cược tổng số điểm của trận trên hoặc dưới hệ số cho trước. Chẵn/Lẻ: cược tổng điểm chẵn hoặc lẻ.",
      "Quarter và Hiệp là các cược theo từng giai đoạn trận. Cược hiệp 2 bao gồm kết quả hiệp phụ.",
      "Các loại khác: thắng cách biệt, tổng điểm đội, thắng 3 cửa/7 cửa/12 cửa, cầu thủ, Race to 20 Points.",
    ],
  },
  {
    id: "tennis",
    title: "Cược quần vợt",
    category: "Tennis",
    image: "tennis-guide.jpg",
    example: "Game Winner Set 2 - Game 7: chỉ tính người thắng đúng game đó. Nếu game không hoàn thành, vé có thể bị hủy.",
    checklist: ["Kiểm tra cược theo game, set hay cả trận.", "Super tiebreak có thể được tính cho O/U.", "Nếu số set quy định thay đổi, Exact Score có thể bị hủy."],
    items: [
      "Asian Handicap và O/U dựa trên tổng số ván thi đấu trong trận, O/U tính cả Super tiebreak nếu có.",
      "Game Winner: dự đoán tay vợt thắng game đấu được ghi rõ trong loại cược.",
      "Outright: dự đoán tay vợt vô địch giải đấu. Odd/Even dựa theo tổng số game chẵn hoặc lẻ.",
      "Exact Score và Any set to Finish To Nil phụ thuộc điều kiện hoàn tất set/trận theo quy định.",
    ],
  },
];

const betTypes = [
  { value: "footballHandicap", label: "Bóng đá - Cược Chấp", family: "handicap", unit: "bàn" },
  { value: "footballTotal", label: "Bóng đá - Tài/Xỉu", family: "total", unit: "bàn" },
  { value: "oneXTwo", label: "Cược 1X2" },
  { value: "correctScore", label: "Bóng đá - Tỷ số chính xác", family: "correctScore", unit: "bàn" },
  { value: "halfFullTime", label: "Bóng đá - Hiệp/Hết trận", family: "halfFullTime", unit: "bàn" },
  { value: "timeBet", label: "Bóng đá - Cược thời gian", family: "timeBet", unit: "phút" },
  { value: "goalBet", label: "Bóng đá - Cược bàn thắng", family: "goalBet", unit: "bàn" },
  { value: "otherFootball", label: "Bóng đá - Cược khác", family: "otherFootball", unit: "bàn" },
  { value: "cornerHandicap", label: "Phạt góc - Cược Chấp", family: "handicap", unit: "quả phạt góc" },
  { value: "cornerTotal", label: "Phạt góc - Tài/Xỉu", family: "total", unit: "quả phạt góc" },
  { value: "cardHandicap", label: "Thẻ phạt - Cược Chấp", family: "handicap", unit: "điểm thẻ" },
  { value: "cardTotal", label: "Thẻ phạt - Tài/Xỉu", family: "total", unit: "điểm thẻ" },
  { value: "basketballSpread", label: "Bóng rổ - Cược Chấp Spread", family: "handicap", unit: "điểm" },
  { value: "basketballTotal", label: "Bóng rổ - Tài/Xỉu", family: "total", unit: "điểm" },
  { value: "tennisHandicap", label: "Quần vợt - Asian Handicap", family: "handicap", unit: "game/set" },
  { value: "tennisTotal", label: "Quần vợt - Tài/Xỉu", family: "total", unit: "game/set" },
  { value: "fastMarket", label: "Fast Market", family: "fast", unit: "sự kiện" },
];

const sectionNav = document.querySelector("#sectionNav");
const contentView = document.querySelector("#contentView");
const contentSearch = document.querySelector("#contentSearch");
const form = document.querySelector("#betForm");
const betTypeSelect = document.querySelector("#betType");
const ticketNameInput = document.querySelector("#ticketName");
const homeTeamInput = document.querySelector("#homeTeam");
const awayTeamInput = document.querySelector("#awayTeam");
const selectedTeamSelect = document.querySelector("#selectedTeam");
const handicapDirectionSelect = document.querySelector("#handicapDirection");
const handicapLineInput = document.querySelector("#handicapLine");
const handicapPeriodSelect = document.querySelector("#handicapPeriod");
const totalPickSelect = document.querySelector("#totalPick");
const totalLineInput = document.querySelector("#totalLine");
const totalPeriodSelect = document.querySelector("#totalPeriod");
const homeYellowCardsInput = document.querySelector("#homeYellowCards");
const homeDirectRedCardsInput = document.querySelector("#homeDirectRedCards");
const homeSecondYellowRedInput = document.querySelector("#homeSecondYellowRed");
const awayYellowCardsInput = document.querySelector("#awayYellowCards");
const awayDirectRedCardsInput = document.querySelector("#awayDirectRedCards");
const awaySecondYellowRedInput = document.querySelector("#awaySecondYellowRed");
const exactHomeInput = document.querySelector("#exactHomeScore");
const exactAwayInput = document.querySelector("#exactAwayScore");
const halfTimePickSelect = document.querySelector("#halfTimePick");
const fullTimePickSelect = document.querySelector("#fullTimePick");
const halfHomeScoreInput = document.querySelector("#halfHomeScore");
const halfAwayScoreInput = document.querySelector("#halfAwayScore");
const timeBetTypeSelect = document.querySelector("#timeBetType");
const timeLineInput = document.querySelector("#timeLine");
const firstGoalMinuteInput = document.querySelector("#firstGoalMinute");
const goalBetTypeSelect = document.querySelector("#goalBetType");
const goalPickSelect = document.querySelector("#goalPick");
const goalExactInput = document.querySelector("#goalExact");
const goalExactField = document.querySelector("#goalExactField");
const goalTeamFields = document.querySelector("#goalTeamFields");
const goalTeamPickSelect = document.querySelector("#goalTeamPick");
const goalMarginInput = document.querySelector("#goalMargin");
const otherBetTypeSelect = document.querySelector("#otherBetType");
const otherPickSelect = document.querySelector("#otherPick");
const fastEventSelect = document.querySelector("#fastEvent");
const fastPickSelect = document.querySelector("#fastPick");
const fastWindowSelect = document.querySelector("#fastWindow");
const fastCountInput = document.querySelector("#fastCount");
const oneXTwoPickSelect = document.querySelector("#oneXTwoPick");
const timingFields = document.querySelector("#timingFields");
const liveStartFields = document.querySelector("#liveStartFields");
const matchTeamsFields = document.querySelector("#matchTeamsFields");
const finalScoreFields = document.querySelector("#finalScoreFields");
const startHomeScoreInput = document.querySelector("#startHomeScore");
const startAwayScoreInput = document.querySelector("#startAwayScore");
const homeScoreInput = document.querySelector("#homeScore");
const awayScoreInput = document.querySelector("#awayScore");
const homeScoreLabel = document.querySelector("#homeScoreLabel");
const awayScoreLabel = document.querySelector("#awayScoreLabel");
const stakeInput = document.querySelector("#stake");
const oddsInput = document.querySelector("#odds");
const oddsFormatSelect = document.querySelector("#oddsFormat");
const resultLabel = document.querySelector("#resultLabel");
const pointsOutput = document.querySelector("#pointsOutput");
const settlementNote = document.querySelector("#settlementNote");
const selectedBetType = document.querySelector("#selectedBetType");
const winAmount = document.querySelector("#winAmount");
const loseAmount = document.querySelector("#loseAmount");
const validationAlert = document.querySelector("#validationAlert");
const settlementSteps = document.querySelector("#settlementSteps");
const scriptOutput = document.querySelector("#scriptOutput");
const copyButton = document.querySelector("#copyScript");
const ticketStatusSelect = document.querySelector("#ticketStatus");
const pendingReasonField = document.querySelector("#pendingReasonField");
const pendingReasonSelect = document.querySelector("#pendingReason");
const googleCheck = document.querySelector("#googleCheck");
const googleSearchLink = document.querySelector("#googleSearchLink");
const googleSearchLabel = document.querySelector("#googleSearchLabel");
const toast = document.querySelector("#toast");
const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");

const numberFormatter = new Intl.NumberFormat("vi-VN", {
  maximumFractionDigits: 2,
});

function formatPoints(value) {
  const normalized = Object.is(value, -0) ? 0 : value;
  return `${numberFormatter.format(normalized)} điểm`;
}

function readNumber(input) {
  const value = Number(input.value);
  return Number.isFinite(value) ? value : 0;
}

function cleanText(value, fallback) {
  const text = value.trim();
  return text || fallback;
}

function renderNavigation(sections = guideSections) {
  sectionNav.innerHTML = sections
    .map(
      (section, index) => `
        <button class="nav-item ${index === 0 ? "active" : ""}" type="button" data-section="${section.id}">
          <span>${section.category}</span>
          ${section.title}
        </button>
      `,
    )
    .join("");
}

function renderSection(sectionId) {
  const section = guideSections.find((item) => item.id === sectionId) || guideSections[0];

  contentView.innerHTML = `
    <div class="guide-hero">
      <div>
        <div class="content-kicker">${section.category}</div>
        <h3>${section.title}</h3>
      </div>
      ${section.image ? `<img src="${section.image}" alt="${section.title}" loading="lazy" />` : ""}
    </div>

    <div class="guide-grid">
      <section class="guide-block primary">
        <h4>Nội dung chính</h4>
        <ul>
          ${section.items.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>

      ${
        section.formula
          ? `<section class="guide-block">
              <h4>Công thức / ký hiệu</h4>
              <ul>${section.formula.map((item) => `<li>${item}</li>`).join("")}</ul>
            </section>`
          : ""
      }

      ${
        section.example
          ? `<section class="guide-block example">
              <h4>Ví dụ xử lý</h4>
              <p>${section.example}</p>
            </section>`
          : ""
      }

      ${
        section.checklist
          ? `<section class="guide-block">
              <h4>Checklist nhân viên</h4>
              <ul>${section.checklist.map((item) => `<li>${item}</li>`).join("")}</ul>
            </section>`
          : ""
      }
    </div>
  `;

  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.section === section.id);
  });
}

function switchTab(tabName) {
  tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tabName);
  });

  tabPanels.forEach((panel) => {
    const isActive = panel.id === `${tabName}Panel`;
    panel.classList.toggle("active", isActive);
  });
}

function filterSections() {
  const term = contentSearch.value.trim().toLowerCase();
  const filtered = guideSections.filter((section) => {
    const haystack = `${section.title} ${section.category} ${section.items.join(" ")}`.toLowerCase();
    return haystack.includes(term);
  });

  renderNavigation(filtered.length ? filtered : guideSections);
  renderSection((filtered[0] || guideSections[0]).id);
}

function getWinLoseAmounts(stake, odds, format) {
  const absoluteOdds = Math.abs(odds);

  if (format === "decimal") {
    return {
      win: Math.max(0, stake * (odds - 1)),
      lose: stake,
    };
  }

  if (format === "malay") {
    return odds < 0
      ? { win: stake, lose: stake * absoluteOdds }
      : { win: stake * odds, lose: stake };
  }

  if (format === "us") {
    return odds < 0
      ? { win: stake, lose: stake * (absoluteOdds / 100) }
      : { win: stake * (odds / 100), lose: stake };
  }

  return {
    win: stake * odds,
    lose: stake,
  };
}

function splitLineIfQuarter(line) {
  const scaled = Math.round(line * 100);
  const remainder = Math.abs(scaled) % 50;

  if (remainder !== 25) {
    return [line];
  }

  const lower = Math.floor(line * 2) / 2;
  const upper = Math.ceil(line * 2) / 2;
  return [lower, upper];
}

function evaluateAdjustedMargin(margin) {
  if (margin > 0) return "win";
  if (margin < 0) return "lose";
  return "push";
}

function summarizeParts(parts) {
  const wins = parts.filter((part) => part.outcome === "win").length;
  const losses = parts.filter((part) => part.outcome === "lose").length;
  const pushes = parts.filter((part) => part.outcome === "push").length;

  if (wins === parts.length) return { label: "Thắng", text: "thắng", tone: "win" };
  if (losses === parts.length) return { label: "Thua", text: "thua", tone: "lose" };
  if (pushes === parts.length) return { label: "Hòa", text: "hòa, hoàn tiền cược", tone: "push" };
  if (wins && pushes) return { label: "Thắng nửa", text: "thắng nửa", tone: "win" };
  if (losses && pushes) return { label: "Thua nửa", text: "thua nửa", tone: "lose" };
  return { label: "Nửa thắng nửa thua", text: "nửa thắng nửa thua", tone: "push" };
}

function settleParts(parts, amounts, stake) {
  const partStake = stake / parts.length;
  const winPerPoint = stake ? amounts.win / stake : 0;
  const losePerPoint = stake ? amounts.lose / stake : 0;

  return parts.reduce((total, part) => {
    if (part.outcome === "win") return total + partStake * winPerPoint;
    if (part.outcome === "lose") return total - partStake * losePerPoint;
    return total;
  }, 0);
}

function getSelectedTeamName(homeTeam, awayTeam) {
  return selectedTeamSelect.value === "home" ? homeTeam : awayTeam;
}

function getOpponentTeamName(homeTeam, awayTeam) {
  return selectedTeamSelect.value === "home" ? awayTeam : homeTeam;
}

function getBetTiming() {
  return new FormData(form).get("betTiming") || "prematch";
}

function getEffectiveScores(homeScore, awayScore, startHomeScore, startAwayScore, timing) {
  if (timing !== "live") {
    return { home: homeScore, away: awayScore };
  }

  return {
    home: Math.max(0, homeScore - startHomeScore),
    away: Math.max(0, awayScore - startAwayScore),
  };
}

function calculateHandicap({ homeTeam, awayTeam, homeScore, awayScore, startHomeScore, startAwayScore, timing, amounts, stake, betType }) {
  const effective = getEffectiveScores(homeScore, awayScore, startHomeScore, startAwayScore, timing);
  const selectedIsHome = selectedTeamSelect.value === "home";
  const selectedScore = selectedIsHome ? effective.home : effective.away;
  const opponentScore = selectedIsHome ? effective.away : effective.home;
  const rawLine = Math.max(0, readNumber(handicapLineInput));
  const signedLine = handicapDirectionSelect.value === "give" ? -rawLine : rawLine;
  const lines = splitLineIfQuarter(signedLine);
  const parts = lines.map((line) => ({
    line,
    outcome: evaluateAdjustedMargin(selectedScore - opponentScore + line),
  }));
  const summary = summarizeParts(parts);
  const points = settleParts(parts, amounts, stake);
  const selectedName = getSelectedTeamName(homeTeam, awayTeam);
  const directionText = signedLine < 0 ? "chấp" : "được chấp";
  const periodText = betType.value === "footballHandicap" ? ` - ${handicapPeriodSelect.value}` : "";
  const partText = parts.map((part) => `${part.line > 0 ? "+" : ""}${numberFormatter.format(part.line)}: ${part.outcome}`).join(", ");
  const liveText = timing === "live" ? ` Tỷ số lúc đặt ${startHomeScore}-${startAwayScore}, phần tính cược sau lúc đặt là ${effective.home}-${effective.away}.` : "";

  return {
    ...summary,
    points,
    pickText: `${selectedName} ${directionText} ${numberFormatter.format(rawLine)}${periodText}`,
    note: `${selectedName} ${directionText} ${numberFormatter.format(rawLine)} ${betType.unit}${periodText}\nKết quả trận đấu ${homeTeam} ${homeScore}-${awayScore} ${awayTeam}.${liveText}\nKết quả từng phần: ${partText}.`,
    steps: [
      timing === "live" ? `Lấy phần phát sinh sau lúc đặt: ${homeScore}-${awayScore} trừ ${startHomeScore}-${startAwayScore} = ${effective.home}-${effective.away}.` : `Kết quả dùng để tính: ${homeScore}-${awayScore}.`,
      `Áp kèo ${selectedName} ${directionText} ${numberFormatter.format(rawLine)}${parts.length === 2 ? `, chia thành ${partText}` : ""}.`,
      `Kết toán ròng: ${formatPoints(points)}.`,
    ],
  };
}

function calculateTotal({ homeTeam, awayTeam, homeScore, awayScore, amounts, stake, betType }) {
  const totalScore = homeScore + awayScore;
  const line = Math.max(0, readNumber(totalLineInput));
  const pick = totalPickSelect.value;
  const signedDiff = pick === "over" ? totalScore - line : line - totalScore;
  const lines = splitLineIfQuarter(signedDiff).map((diff) => ({
    line: diff,
    outcome: evaluateAdjustedMargin(diff),
  }));
  const summary = summarizeParts(lines);
  const points = settleParts(lines, amounts, stake);
  const periodText = betType.value === "footballTotal" ? ` - ${totalPeriodSelect.value}` : "";
  const pickText = `${pick === "over" ? "Tài/Trên" : "Xỉu/Dưới"} ${numberFormatter.format(line)}${periodText}`;

  return {
    ...summary,
    points,
    pickText,
    note: `${homeTeam} ${homeScore}-${awayScore} ${awayTeam}, tổng ${betType.unit} ${numberFormatter.format(totalScore)} so với mốc ${numberFormatter.format(line)}. Vé ${summary.text}.`,
    steps: [
      `Tổng ${betType.unit}: ${homeScore} + ${awayScore} = ${numberFormatter.format(totalScore)}.`,
      `So với lựa chọn ${pickText}: vé ${summary.text}.`,
      `Kết toán ròng: ${formatPoints(points)}.`,
    ],
  };
}

function readCardTeamPoints(yellowInput, directRedInput, secondYellowRedInput) {
  const yellow = Math.max(0, Math.floor(readNumber(yellowInput)));
  const directRed = Math.max(0, Math.floor(readNumber(directRedInput)));
  const secondYellowRed = Math.max(0, Math.floor(readNumber(secondYellowRedInput)));

  return {
    yellow,
    directRed,
    secondYellowRed,
    points: yellow + directRed * 2 + secondYellowRed * 3,
  };
}

function calculateCardTotal({ homeTeam, awayTeam, amounts, stake }) {
  const homeCards = readCardTeamPoints(homeYellowCardsInput, homeDirectRedCardsInput, homeSecondYellowRedInput);
  const awayCards = readCardTeamPoints(awayYellowCardsInput, awayDirectRedCardsInput, awaySecondYellowRedInput);
  const totalPoints = homeCards.points + awayCards.points;
  const line = Math.max(0, readNumber(totalLineInput));
  const pick = totalPickSelect.value;
  const signedDiff = pick === "over" ? totalPoints - line : line - totalPoints;
  const parts = splitLineIfQuarter(signedDiff).map((diff) => ({
    line: diff,
    outcome: evaluateAdjustedMargin(diff),
  }));
  const summary = summarizeParts(parts);
  const points = settleParts(parts, amounts, stake);
  const pickText = `${pick === "over" ? "Tài/Trên" : "Xỉu/Dưới"} ${numberFormatter.format(line)} điểm thẻ`;

  return {
    ...summary,
    points,
    pickText,
    note: `${homeTeam}: ${homeCards.points} điểm thẻ; ${awayTeam}: ${awayCards.points} điểm thẻ. Tổng ${totalPoints} so với mốc ${numberFormatter.format(line)}. Vé ${summary.text}.`,
    steps: [
      `${homeTeam}: ${homeCards.yellow} vàng x 1 + ${homeCards.directRed} đỏ trực tiếp x 2 + ${homeCards.secondYellowRed} đỏ từ 2 vàng x 3 = ${homeCards.points} điểm.`,
      `${awayTeam}: ${awayCards.yellow} vàng x 1 + ${awayCards.directRed} đỏ trực tiếp x 2 + ${awayCards.secondYellowRed} đỏ từ 2 vàng x 3 = ${awayCards.points} điểm.`,
      `Tổng điểm thẻ: ${homeCards.points} + ${awayCards.points} = ${totalPoints}; so với ${pickText}, vé ${summary.text}.`,
      "Ghi chú: đỏ từ 2 thẻ vàng đã tính trọn 3 điểm, không cộng lại hai thẻ này vào mục vàng riêng lẻ.",
      `Kết toán ròng: ${formatPoints(points)}.`,
    ],
  };
}

function calculateOneXTwo({ homeTeam, awayTeam, homeScore, awayScore, amounts }) {
  const actual = homeScore > awayScore ? "home" : homeScore < awayScore ? "away" : "draw";
  const pick = oneXTwoPickSelect.value;
  const isWin = actual === pick;
  const labelMap = {
    home: `${homeTeam} thắng`,
    draw: "Hai đội hòa",
    away: `${awayTeam} thắng`,
  };

  return {
    label: isWin ? "Thắng" : "Thua",
    text: isWin ? "thắng" : "thua",
    tone: isWin ? "win" : "lose",
    points: isWin ? amounts.win : -amounts.lose,
    pickText: labelMap[pick],
    note: `Khách chọn ${labelMap[pick]}. Tỷ số ${homeTeam} ${homeScore}-${awayScore} ${awayTeam}, kết quả thực tế: ${labelMap[actual]}.`,
    steps: [
      `Kết quả thực tế: ${labelMap[actual]}.`,
      `Đối chiếu với lựa chọn: ${labelMap[pick]}.`,
      `Kết toán ròng: ${formatPoints(isWin ? amounts.win : -amounts.lose)}.`,
    ],
  };
}

function getResultCode(homeScore, awayScore) {
  if (homeScore > awayScore) return "home";
  if (homeScore < awayScore) return "away";
  return "draw";
}

function getResultLabel(code, homeTeam, awayTeam) {
  const labels = {
    home: `${homeTeam} thắng`,
    draw: "Hai đội hòa",
    away: `${awayTeam} thắng`,
  };
  return labels[code];
}

function binarySettlement(isWin, amounts, pickText, note) {
  const points = isWin ? amounts.win : -amounts.lose;
  return {
    label: isWin ? "Thắng" : "Thua",
    text: isWin ? "thắng" : "thua",
    tone: isWin ? "win" : "lose",
    points,
    pickText,
    note,
    steps: [note, `Lựa chọn: ${pickText}.`, `Kết toán ròng: ${formatPoints(points)}.`],
  };
}

function calculateCorrectScore({ homeTeam, awayTeam, homeScore, awayScore, amounts }) {
  const exactHome = Math.max(0, Math.floor(readNumber(exactHomeInput)));
  const exactAway = Math.max(0, Math.floor(readNumber(exactAwayInput)));
  const isWin = exactHome === homeScore && exactAway === awayScore;

  return binarySettlement(
    isWin,
    amounts,
    `${homeTeam} ${exactHome}-${exactAway} ${awayTeam}`,
    `Khách chọn tỷ số chính xác ${exactHome}-${exactAway}. Kết quả cuối ${homeTeam} ${homeScore}-${awayScore} ${awayTeam}.`,
  );
}

function calculateHalfFullTime({ homeTeam, awayTeam, homeScore, awayScore, amounts }) {
  const halfHome = Math.max(0, Math.floor(readNumber(halfHomeScoreInput)));
  const halfAway = Math.max(0, Math.floor(readNumber(halfAwayScoreInput)));
  const halfActual = getResultCode(halfHome, halfAway);
  const fullActual = getResultCode(homeScore, awayScore);
  const halfPick = halfTimePickSelect.value;
  const fullPick = fullTimePickSelect.value;
  const isWin = halfPick === halfActual && fullPick === fullActual;

  return binarySettlement(
    isWin,
    amounts,
    `Hiệp 1 ${getResultLabel(halfPick, homeTeam, awayTeam)} / Cả trận ${getResultLabel(fullPick, homeTeam, awayTeam)}`,
    `Hiệp 1 thực tế ${halfHome}-${halfAway} (${getResultLabel(halfActual, homeTeam, awayTeam)}), cả trận ${homeScore}-${awayScore} (${getResultLabel(fullActual, homeTeam, awayTeam)}).`,
  );
}

function calculateTimeBet({ homeTeam, awayTeam, amounts }) {
  const type = timeBetTypeSelect.value;
  const line = Math.max(0, readNumber(timeLineInput));
  const firstGoalMinute = Math.max(0, readNumber(firstGoalMinuteInput));
  const hasGoal = firstGoalMinute > 0;
  let isWin = false;
  let pickText = "";

  if (type === "before") {
    isWin = hasGoal && firstGoalMinute <= line;
    pickText = `Có bàn thắng trước/phút ${numberFormatter.format(line)}`;
  } else if (type === "after") {
    isWin = hasGoal && firstGoalMinute > line;
    pickText = `Bàn thắng đầu tiên sau phút ${numberFormatter.format(line)}`;
  } else {
    isWin = !hasGoal;
    pickText = "Không có bàn thắng";
  }

  return binarySettlement(
    isWin,
    amounts,
    pickText,
    hasGoal ? `Bàn thắng đầu tiên ở phút ${numberFormatter.format(firstGoalMinute)}.` : `${homeTeam} vs ${awayTeam} không có bàn thắng trong phạm vi xét.`,
  );
}

function calculateGoalBet({ homeTeam, awayTeam, homeScore, awayScore, amounts }) {
  const totalGoals = homeScore + awayScore;
  const type = goalBetTypeSelect.value;
  let isWin = false;
  let pickText = "";

  if (type === "exactTotal") {
    const exact = Math.max(0, Math.floor(readNumber(goalExactInput)));
    isWin = totalGoals === exact;
    pickText = `Tổng bàn thắng đúng ${exact}`;
  } else if (type === "oddEven") {
    isWin = goalPickSelect.value === (totalGoals % 2 === 0 ? "even" : "odd");
    pickText = goalPickSelect.value === "even" ? "Tổng bàn thắng Chẵn" : "Tổng bàn thắng Lẻ";
  } else if (type === "bothTeamsScore") {
    const btts = homeScore > 0 && awayScore > 0;
    isWin = goalPickSelect.value === (btts ? "yes" : "no");
    pickText = goalPickSelect.value === "yes" ? "Hai đội có bàn thắng" : "Hai đội không cùng ghi bàn";
  } else if (type === "margin") {
    const selectedTeam = goalTeamPickSelect.value;
    const margin = Math.max(1, Math.floor(readNumber(goalMarginInput)));
    const actualMargin = selectedTeam === "home" ? homeScore - awayScore : awayScore - homeScore;
    isWin = actualMargin === margin;
    pickText = `${selectedTeam === "home" ? homeTeam : awayTeam} thắng cách biệt ${margin} bàn`;
  } else {
    const selectedTeam = goalTeamPickSelect.value;
    isWin = selectedTeam === "home" ? homeScore > 0 : awayScore > 0;
    pickText = `${selectedTeam === "home" ? homeTeam : awayTeam} có ghi bàn`;
  }

  return binarySettlement(
    isWin,
    amounts,
    pickText,
    `Kết quả cuối ${homeTeam} ${homeScore}-${awayScore} ${awayTeam}, tổng bàn ${totalGoals}.`,
  );
}

function calculateOtherFootball({ homeTeam, awayTeam, homeScore, awayScore, amounts }) {
  const type = otherBetTypeSelect.value;
  const pick = otherPickSelect.value;
  const result = getResultCode(homeScore, awayScore);
  let isWin = false;
  let pickText = "";

  if (type === "doubleChance") {
    const pairMap = {
      homeDraw: ["home", "draw"],
      awayDraw: ["away", "draw"],
      homeAway: ["home", "away"],
    };
    isWin = pairMap[pick].includes(result);
    pickText = pick === "homeDraw" ? `${homeTeam} hoặc Hòa` : pick === "awayDraw" ? `${awayTeam} hoặc Hòa` : `${homeTeam} hoặc ${awayTeam}`;
  } else if (type === "drawNoBet") {
    if (result === "draw") {
      return {
        label: "Hòa",
        text: "hòa, hoàn tiền cược",
        tone: "push",
        points: 0,
        pickText: pick === "home" ? `${homeTeam} hòa hoàn tiền` : `${awayTeam} hòa hoàn tiền`,
        note: `Kết quả hòa ${homeScore}-${awayScore}, vé được hoàn tiền.`,
        steps: [
          `Kết quả cuối: ${homeScore}-${awayScore}, hai đội hòa.`,
          "Thị trường Hòa được hoàn tiền: trả lại tiền cược.",
          "Kết toán ròng: 0 điểm.",
        ],
      };
    }
    isWin = pick === result;
    pickText = pick === "home" ? `${homeTeam} thắng, hòa hoàn tiền` : `${awayTeam} thắng, hòa hoàn tiền`;
  } else {
    const cleanSheet = pick === "home" ? awayScore === 0 : homeScore === 0;
    const teamWon = pick === result;
    isWin = cleanSheet && teamWon;
    pickText = pick === "home" ? `${homeTeam} thắng không thủng lưới` : `${awayTeam} thắng không thủng lưới`;
  }

  return binarySettlement(
    isWin,
    amounts,
    pickText,
    `Kết quả cuối ${homeTeam} ${homeScore}-${awayScore} ${awayTeam}.`,
  );
}

function calculateFastMarket({ amounts }) {
  const eventName = fastEventSelect.value;
  const pick = fastPickSelect.value;
  const windowText = fastWindowSelect.options[fastWindowSelect.selectedIndex].text;
  const count = Math.max(0, Math.floor(readNumber(fastCountInput)));
  const happened = count > 0;
  const isWin = (pick === "yes" && happened) || (pick === "no" && !happened);

  return {
    label: isWin ? "Thắng" : "Thua",
    text: isWin ? "thắng" : "thua",
    tone: isWin ? "win" : "lose",
    points: isWin ? amounts.win : -amounts.lose,
    pickText: `${pick === "yes" ? "Có" : "Không"} ${eventName} trong ${windowText}`,
    note: `Fast Market: khách chọn ${pick === "yes" ? "Có" : "Không"} ${eventName} trong ${windowText}. Số sự kiện xảy ra: ${count}.`,
    steps: [
      `Cửa kiểm tra: ${windowText}, sự kiện: ${eventName}.`,
      `Ghi nhận ${count} sự kiện, khách chọn ${pick === "yes" ? "Có" : "Không"}.`,
      `Kết toán ròng: ${formatPoints(isWin ? amounts.win : -amounts.lose)}.`,
    ],
  };
}

function setOptions(select, options) {
  const current = select.value;
  select.innerHTML = options.map((option) => `<option value="${option.value}">${option.label}</option>`).join("");
  if (options.some((option) => option.value === current)) {
    select.value = current;
  }
}

function updateDependentOptions() {
  const goalType = goalBetTypeSelect.value;
  if (goalType === "oddEven") {
    setOptions(goalPickSelect, [
      { value: "even", label: "Chẵn" },
      { value: "odd", label: "Lẻ" },
    ]);
  } else if (goalType === "bothTeamsScore") {
    setOptions(goalPickSelect, [
      { value: "yes", label: "Có" },
      { value: "no", label: "Không" },
    ]);
  } else if (goalType === "exactTotal") {
    setOptions(goalPickSelect, [{ value: "exact", label: "Dùng số tổng bàn bên dưới" }]);
  } else {
    setOptions(goalPickSelect, [{ value: "team", label: "Dùng đội lựa chọn bên dưới" }]);
  }
  goalExactField.classList.toggle("hidden", goalType !== "exactTotal");
  goalTeamFields.classList.toggle("hidden", !["margin", "scoringTeam"].includes(goalType));

  const otherType = otherBetTypeSelect.value;
  if (otherType === "doubleChance") {
    setOptions(otherPickSelect, [
      { value: "homeDraw", label: "Đội nhà hoặc Hòa" },
      { value: "awayDraw", label: "Đội khách hoặc Hòa" },
      { value: "homeAway", label: "Đội nhà hoặc Đội khách" },
    ]);
  } else {
    setOptions(otherPickSelect, [
      { value: "home", label: "Đội nhà" },
      { value: "away", label: "Đội khách" },
    ]);
  }
}

function updateMarketFields() {
  const betType = betTypes.find((type) => type.value === betTypeSelect.value) || betTypes[0];
  const timing = getBetTiming();
  const allowLive = betType.value === "footballHandicap";
  const isScoreMarket = ["footballHandicap", "footballTotal", "oneXTwo", "correctScore", "halfFullTime", "timeBet", "goalBet", "otherFootball"].includes(betType.value);
  const metricLabel = isScoreMarket ? "Tỷ số" : `Số ${betType.unit}`;
  updateDependentOptions();

  document.querySelectorAll(".market-fields").forEach((field) => {
    const markets = field.dataset.market.split(" ");
    field.classList.toggle("hidden", !markets.includes(betType.value) && !markets.includes(betType.family));
  });
  document.querySelectorAll(".scope-field").forEach((field) => {
    field.classList.toggle("hidden", field.dataset.scopeMarket !== betType.value);
  });

  timingFields.classList.toggle("hidden", !allowLive);
  liveStartFields.classList.toggle("hidden", !allowLive || timing !== "live");
  matchTeamsFields.classList.toggle("hidden", betType.family === "fast");
  finalScoreFields.classList.toggle("hidden", ["fastMarket", "timeBet", "cardTotal"].includes(betType.value));
  homeScoreLabel.textContent = betType.family === "fast" ? "Thông tin đội nhà" : `${metricLabel} đội nhà cuối`;
  awayScoreLabel.textContent = betType.family === "fast" ? "Thông tin đội khách" : `${metricLabel} đội khách cuối`;
}

function validateSettlement({ betType, timing, odds, oddsFormat, homeScore, awayScore, startHomeScore, startAwayScore }) {
  const issues = [];

  if (oddsFormat === "decimal" && odds <= 1) {
    issues.push("Tỉ lệ Decimal phải lớn hơn 1.");
  }

  if (["hongkong", "malay"].includes(oddsFormat) && odds === 0) {
    issues.push("Tỉ lệ cược không được bằng 0.");
  }

  if (betType.value === "footballHandicap" && timing === "live" && (homeScore < startHomeScore || awayScore < startAwayScore)) {
    issues.push("Tỷ số cuối trận không được nhỏ hơn tỷ số lúc đặt cược.");
  }

  if (betType.value === "halfFullTime") {
    const halfHome = Math.max(0, Math.floor(readNumber(halfHomeScoreInput)));
    const halfAway = Math.max(0, Math.floor(readNumber(halfAwayScoreInput)));
    if (halfHome > homeScore || halfAway > awayScore) {
      issues.push("Tỷ số hiệp 1 không được lớn hơn tỷ số cả trận.");
    }
  }

  return issues;
}

function renderValidation(issues) {
  validationAlert.classList.toggle("hidden", issues.length === 0);
  validationAlert.textContent = issues.join(" ");
}

function renderSettlementSteps(steps = []) {
  settlementSteps.innerHTML = steps.map((step) => `<li>${step}</li>`).join("");
}

function buildCustomerScript({ ticketName, betType, settlement, stake, odds, timing, homeTeam, awayTeam, homeScore, awayScore, startHomeScore, startAwayScore }) {
  if (betType.value === "fastMarket") {
    return [
      `Dạ vé cược anh cung cấp: ${ticketName}.`,
      `Loại cược: Fast Market. Anh đặt ${settlement.pickText} với số điểm ${formatPoints(stake)}, tỉ lệ cược ${numberFormatter.format(odds)}.`,
      `${settlement.note} Vé ${settlement.text}: ${formatPoints(settlement.points)}.`,
      "Vé cược kết toán chính xác ạ.",
    ].join("\n");
  }

  if (betType.value === "timeBet") {
    return [
      `Dạ vé cược anh cung cấp: ${ticketName}.`,
      `Loại cược: ${betType.label}. Anh đặt ${settlement.pickText} với số điểm ${formatPoints(stake)}, tỉ lệ cược ${numberFormatter.format(odds)}.`,
      `${settlement.note} Vé ${settlement.text}: ${formatPoints(settlement.points)}.`,
      "Vé cược kết toán chính xác ạ.",
    ].join("\n");
  }

  if (betType.value === "cardTotal") {
    return [
      `Dạ vé cược anh cung cấp: ${ticketName}.`,
      `Loại cược: Thẻ phạt - Tài/Xỉu. Anh đặt ${settlement.pickText} với số điểm ${formatPoints(stake)}, tỉ lệ cược ${numberFormatter.format(odds)}.`,
      `${settlement.note} Vé ${settlement.text}: ${formatPoints(settlement.points)}.`,
      "Vé cược kết toán chính xác ạ.",
    ].join("\n");
  }

  return [
    `Dạ vé cược anh cung cấp: ${ticketName}.`,
    `Loại cược: ${betType.label}. Anh đặt ${settlement.pickText} với số điểm ${formatPoints(stake)}, tỉ lệ cược ${numberFormatter.format(odds)}.`,
    timing === "live"
      ? `Lúc đặt: ${homeTeam} ${startHomeScore}-${startAwayScore} ${awayTeam}; kết quả trận đấu: ${homeTeam} ${homeScore}-${awayScore} ${awayTeam}.`
      : `Kết quả trận đấu: ${homeTeam} ${homeScore}-${awayScore} ${awayTeam}.`,
    `Vé ${settlement.text}: ${formatPoints(settlement.points)}.`,
    "Vé cược kết toán chính xác ạ.",
  ].join("\n");
}

function buildPendingScript(ticketName, pendingReason) {
  if (pendingReason === "ended") {
    return "CSKH vui lòng đăng vào nhóm phối hợp FK - CS để được hỗ trợ kiểm tra với kĩ thuật ạ.";
  }

  return [
    `Dạ qua kiểm tra vé cược anh cung cấp ${ticketName}, trận đấu đang diễn ra.`,
    "Anh vui lòng chờ trận đấu kết thúc. Sảnh cập nhật kết quả và kết toán vé cược anh nhé.",
  ].join("\n");
}

function updateReplyState({ ticketName, homeTeam, awayTeam }) {
  const isPending = ticketStatusSelect.value === "pending";
  const pendingReason = pendingReasonSelect.value;
  const searchSuffix = pendingReason === "ended" ? "kết quả trận đấu" : "tỷ số trực tiếp";
  const query = `${homeTeam} vs ${awayTeam} ${searchSuffix}`;

  pendingReasonField.classList.toggle("hidden", !isPending);
  googleCheck.classList.toggle("hidden", !isPending);
  googleSearchLink.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  googleSearchLabel.textContent = pendingReason === "ended"
    ? `Tìm kết quả trận ${homeTeam} vs ${awayTeam} để hỗ trợ kiểm tra vé.`
    : `Tìm tỷ số trực tiếp trận ${homeTeam} vs ${awayTeam}.`;

  return isPending ? buildPendingScript(ticketName, pendingReason) : null;
}

function calculateSettlement() {
  const ticketName = cleanText(ticketNameInput.value, "vé cược");
  const homeTeam = cleanText(homeTeamInput.value, "Đội nhà");
  const awayTeam = cleanText(awayTeamInput.value, "Đội khách");
  const homeScore = Math.max(0, Math.floor(readNumber(homeScoreInput)));
  const awayScore = Math.max(0, Math.floor(readNumber(awayScoreInput)));
  const startHomeScore = Math.max(0, Math.floor(readNumber(startHomeScoreInput)));
  const startAwayScore = Math.max(0, Math.floor(readNumber(startAwayScoreInput)));
  const rawTiming = getBetTiming();
  const stake = Math.max(0, readNumber(stakeInput));
  const odds = readNumber(oddsInput);
  const oddsFormat = oddsFormatSelect.value;
  const betType = betTypes.find((type) => type.value === betTypeSelect.value) || betTypes[0];
  const timing = betType.value === "footballHandicap" ? rawTiming : "prematch";
  const amounts = getWinLoseAmounts(stake, odds, oddsFormat);
  const common = { homeTeam, awayTeam, homeScore, awayScore, startHomeScore, startAwayScore, timing, amounts, stake, odds, oddsFormat, betType };
  const pendingScript = updateReplyState({ ticketName, homeTeam, awayTeam });
  const issues = validateSettlement(common);
  renderValidation(issues);

  if (issues.length) {
    resultLabel.textContent = "Cần kiểm tra";
    resultLabel.classList.remove("loss", "push");
    pointsOutput.textContent = "--";
    selectedBetType.textContent = betType.label;
    settlementNote.textContent = "Vui lòng sửa dữ liệu nhập trước khi kết toán.";
    winAmount.textContent = "--";
    loseAmount.textContent = "--";
    renderSettlementSteps(issues);
    scriptOutput.value = pendingScript || "Chưa thể sinh script do dữ liệu cần kiểm tra.";
    return;
  }

  const calculators = {
    handicap: calculateHandicap,
    total: calculateTotal,
    cardTotal: calculateCardTotal,
    oneXTwo: calculateOneXTwo,
    correctScore: calculateCorrectScore,
    halfFullTime: calculateHalfFullTime,
    timeBet: calculateTimeBet,
    goalBet: calculateGoalBet,
    otherFootball: calculateOtherFootball,
    fast: calculateFastMarket,
  };
  const settlement = (calculators[betType.value] || calculators[betType.family] || calculateHandicap)(common);
  const isLoss = settlement.points < 0;

  resultLabel.textContent = settlement.label;
  resultLabel.classList.toggle("loss", isLoss);
  resultLabel.classList.toggle("push", settlement.points === 0);
  pointsOutput.textContent = formatPoints(settlement.points);
  settlementNote.textContent = settlement.note;
  selectedBetType.textContent = betType.label;
  winAmount.textContent = formatPoints(amounts.win);
  loseAmount.textContent = formatPoints(amounts.lose);
  renderSettlementSteps(settlement.steps);
  scriptOutput.value = pendingScript || buildCustomerScript({
    ticketName,
    betType,
    settlement,
    stake,
    odds,
    timing,
    homeTeam,
    awayTeam,
    homeScore,
    awayScore,
    startHomeScore,
    startAwayScore,
  });
}

async function copyScript() {
  const text = scriptOutput.value;

  try {
    await navigator.clipboard.writeText(text);
  } catch {
    scriptOutput.focus();
    scriptOutput.select();
    document.execCommand("copy");
  }

  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1600);
}

function init() {
  betTypeSelect.innerHTML = betTypes.map((type) => `<option value="${type.value}">${type.label}</option>`).join("");
  renderNavigation();
  renderSection(guideSections[0].id);
  updateDependentOptions();
  updateMarketFields();
  calculateSettlement();
}

sectionNav.addEventListener("click", (event) => {
  const button = event.target.closest(".nav-item");
  if (!button) return;
  renderSection(button.dataset.section);
});

contentSearch.addEventListener("input", filterSections);
form.addEventListener("input", calculateSettlement);
form.addEventListener("change", () => {
  updateMarketFields();
  calculateSettlement();
});
copyButton.addEventListener("click", copyScript);
ticketStatusSelect.addEventListener("change", calculateSettlement);
pendingReasonSelect.addEventListener("change", calculateSettlement);
tabButtons.forEach((button) => {
  button.addEventListener("click", () => switchTab(button.dataset.tab));
});

init();

(function() {
  const OFFSET = 3;
  const BORDER_RADIUS = 8;
  const DOT_COLOR = '#ffffff';
  const TAIL_LEN = 70;
  const SPEED = 1;

  function perim(w,h,r){ return 2*(w-2*r)+2*(h-2*r)+2*Math.PI*r; }

  function ptOnPath(t,w,h,r){
    const P=perim(w,h,r);
    let p=((t%P)+P)%P;
    if(p<w-2*r) return{x:r+p,y:0};
    p-=w-2*r;
    if(p<Math.PI/2*r){const a=-Math.PI/2+p/r;return{x:w-r+Math.cos(a)*r,y:r+Math.sin(a)*r};}
    p-=Math.PI/2*r;
    if(p<h-2*r) return{x:w,y:r+p};
    p-=h-2*r;
    if(p<Math.PI/2*r){const a=p/r;return{x:w-r+Math.cos(a)*r,y:h-r+Math.sin(a)*r};}
    p-=Math.PI/2*r;
    if(p<w-2*r) return{x:w-r-p,y:h};
    p-=w-2*r;
    if(p<Math.PI/2*r){const a=Math.PI/2+p/r;return{x:r+Math.cos(a)*r,y:h-r+Math.sin(a)*r};}
    p-=Math.PI/2*r;
    if(p<h-2*r) return{x:0,y:h-r-p};
    p-=h-2*r;
    const a=Math.PI+p/r;return{x:r+Math.cos(a)*r,y:r+Math.sin(a)*r};
  }

  function initComet(el) {
    const wrap = document.createElement('div');
    wrap.className = 'input-comet-wrap';
    el.parentNode.insertBefore(wrap, el);
    wrap.appendChild(el);

    const cv = document.createElement('canvas');
    wrap.appendChild(cv);
    const ctx = cv.getContext('2d');

    let prog = 0;
    let animId = null;
    let active = false;

    function resize(){
      cv.width  = wrap.offsetWidth  + OFFSET*2;
      cv.height = wrap.offsetHeight + OFFSET*2;
    }

    function draw(){
      if(!active){ 
        ctx.clearRect(0,0,cv.width,cv.height);
        return; 
      }
      const W=cv.width, H=cv.height;
      const iW=W-OFFSET*2, iH=H-OFFSET*2;
      const P=perim(iW,iH,BORDER_RADIUS);
      ctx.clearRect(0,0,W,H);

      // viền mờ khi focus
      ctx.strokeStyle='rgba(255,100,0,0.3)';
      ctx.lineWidth=1;
      ctx.beginPath();
      ctx.roundRect(OFFSET,OFFSET,iW,iH,BORDER_RADIUS);
      ctx.stroke();

      [0,P/2].forEach(offset=>{
        // đuôi
        for(let i=80;i>=0;i--){
          const t=prog+offset-i*(TAIL_LEN/80);
          const pt=ptOnPath(t,iW,iH,BORDER_RADIUS);
          const alpha=Math.pow(1-i/80,2.5)*0.9;
          const sz=(1-i/80)*2.5;
          ctx.fillStyle=`rgba(255,255,255,${alpha})`;
          ctx.beginPath();
          ctx.arc(pt.x+OFFSET,pt.y+OFFSET,sz,0,Math.PI*2);
          ctx.fill();
        }
        // đầu chấm
        const head=ptOnPath(prog+offset,iW,iH,BORDER_RADIUS);
        const hx=head.x+OFFSET, hy=head.y+OFFSET;
        const grd=ctx.createRadialGradient(hx,hy,0,hx,hy,7);
        grd.addColorStop(0,'rgba(255,255,255,1)');
        grd.addColorStop(0.3,DOT_COLOR);
        grd.addColorStop(0.7,DOT_COLOR+'88');
        grd.addColorStop(1,'transparent');
        ctx.fillStyle=grd;
        ctx.beginPath();
        ctx.arc(hx,hy,7,0,Math.PI*2);
        ctx.fill();
        // lõi
        ctx.fillStyle='#fff';
        ctx.shadowColor=DOT_COLOR;
        ctx.shadowBlur=14;
        ctx.beginPath();
        ctx.arc(hx,hy,2,0,Math.PI*2);
        ctx.fill();
        ctx.shadowBlur=0;
      });

      prog+=SPEED;
      animId=requestAnimationFrame(draw);
    }

    // Bật khi focus
    el.addEventListener('focus',()=>{
      active=true;
      cancelAnimationFrame(animId);
      draw();
      animId=requestAnimationFrame(draw);
    });

    // Tắt khi blur
    el.addEventListener('blur',()=>{
      active=false;
      cancelAnimationFrame(animId);
      ctx.clearRect(0,0,cv.width,cv.height);
    });

    resize();
    window.addEventListener('resize',resize);
  }

  document.addEventListener('DOMContentLoaded',()=>{
        document.querySelectorAll('input:not([type=radio]):not([type=checkbox]),select')
      .forEach(el=>initComet(el));
  });
})();
