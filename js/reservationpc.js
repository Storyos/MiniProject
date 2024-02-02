
function toggleSubRegion(regionId) {
    var subRegion = document.getElementById(regionId);
    if (subRegion.style.display === "none") {
        subRegion.style.display = "block";
    } else {
        subRegion.style.display = "none";
    }
}

function showSubRegion(region) {
    var subRegions = document.querySelectorAll('.sub-region');
    subRegions.forEach(function(subRegion) {
        subRegion.style.display = 'none';
    });
    document.getElementById(region).style.display = 'block';
}

// 페이지 로드 시 서울 지역을 기본으로 선택합니다.
window.onload = function() {
    showSubRegion('seoul');
};
